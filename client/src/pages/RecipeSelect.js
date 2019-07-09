
import React, { Component } from "react"
import ResposiveVoice from "../components/recipePage";
import Bookmark from "../components/Bookmark";
// import { Col, Row, Container } from "../components/Grid";
import Wrapper from "../components/Wrapper";
import "./style.css";
import API from "../utils/API"
//------------------------SPEECH RECOGNITION-----------------------------

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'

//------------------------COMPONENT-----------------------------

class Speech extends Component {

    constructor() {
        super()
        this.state = {
            listening: false,
            // input: "",
            recipe: {},
            ingredients: [],
            instructions: []
        }
        this.toggleListen = this.toggleListen.bind(this)
        this.handleListen = this.handleListen.bind(this)
    }

    toggleListen() {
        this.setState({
            listening: !this.state.listening
        }, this.handleListen);
        console.log(" ---- Summary -----", this.state.recipe.summary)
        console.log(" ---- INSTTRUCTIONS -----", this.state.instructions)
        console.log(" ---- INGREDIENTS -----", this.state.ingredients)

        let speech = "";
        speech += this.state.recipe.title + this.state.recipe.summary
        speech += "Here are the ingridients that you will need."

        for (var j = 0; j < this.state.ingredients.length; j++) {

            speech += this.state.ingredients[j];
        }

        speech += "Follow these instructions to prepare your meal.";
        for (var i = 0; i < this.state.instructions.length; i++) {
            speech += this.state.instructions[i];
        }

        window.responsiveVoice.speak(speech, "UK English Female", { rate: 1.2 }, { pitch: 2 }, { volume: 2 });
    }




    handleListen() {
        console.log('listening?', this.state.listening)

        if (this.state.listening) {
            recognition.start()
            recognition.onend = () => {
                console.log("...continue listening...")
                recognition.start()
            }

        } else {
            recognition.stop()
            recognition.onend = () => {
                console.log("Stopped listening per click")
            }
        }

        recognition.onstart = () => {
            console.log("Listening!")
        }


        let finalTranscript = ''
        recognition.onresult = event => {
            let interimTranscript = ''

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) finalTranscript += transcript + ' ';
                else interimTranscript += transcript;
            }
            document.getElementById('final').innerHTML = interimTranscript

            console.log("1 " + interimTranscript);
            console.log("2 " + finalTranscript);

            //-------------------------COMMANDS------------------------------------

            const transcriptArr = finalTranscript.split(' ')
            const stopCmd = transcriptArr.slice(0, -3);
            console.log('stopCmd ----- ', stopCmd);

            for (var i = 0; i < stopCmd.length; i++) {
                console.log("**********" + stopCmd[i]);

                if (stopCmd[i] === 'stop' && stopCmd[i + 1] === 'listening') {
                    recognition.stop()
                    recognition.onend = () => {
                        console.log('Stopped listening per command');
                        const finalText = transcriptArr.slice(0, -3).join(' ')
                        document.getElementById('final').innerHTML = finalText
                    }
                } else
                    if (stopCmd[i] === 'pause') {
                        console.log("pause works");
                        window.responsiveVoice.pause();
                    } else if (stopCmd[i] === 'resume') {
                        window.responsiveVoice.resume();
                    }
            }
        }

        recognition.onerror = event => {
            console.log("Error occurred in recognition: " + event.error)
        }
    }
    // -------------------------RESPONSIVE VOICE JS------------------------------------
    // handleFormSubmit = event => {
    //     console.log(event);
    //     console.log(" ---- INSTTRUCTIONS -----", this.state.instructions)
    //     console.log(" ---- INGREDIENTS -----", this.state.ingredients)
    // window.responsiveVoice.speak(this.state.recipe.summary, "UK English Female", { rate: .8 }, { pitch: 2 }, { volume: 2 });
    // }

    pausebutton() {
        window.responsiveVoice.pause();

    }
    resumebutton() {
        window.responsiveVoice.resume();

    }


    // component did mount will grab the id of the recipe from the url to populate component with data
    componentDidMount() {
        API.getRecipeById(this.props.match.params.id)
            .then(res => this.setState({ recipe: res.data },
                console.log(res.data)
            )).catch(err => console.log(err));
        API.scrapeRecipeById(this.props.match.params.id)
            .then(data => {
                console.log(data.data);
                this.setState({
                    instructions: data.data.instructions,
                    ingredients: data.data.ingredients
                })
            })
    }


    render() {
        return (
            < Wrapper >
                <div className="container styleRecipeSelect">

                    <Bookmark />

                    <ResposiveVoice
                        // handleInputChange={this.handleInputChange}
                        title={this.state.recipe.title}
                        author={this.state.recipe.author}
                        summary={this.state.recipe.summary}
                        link={this.state.recipe.link}
                        thumbnail={this.state.recipe.thumbnail}
                        ingredients={this.state.ingredients}
                        instructions={this.state.instructions}

                    >
                    </ResposiveVoice>
                    <br></br>
                    <button onClick={this.toggleListen} className="btn btn-success">
                        Play / Listen
                </button>
                    <button onClick={this.pausebutton} className="btn btn-primary">
                        Pause
                </button>
                    <button onClick={this.resumebutton} className="btn btn-danger5">
                        Resume
                </button>

                    {/* <button className="btn btn-primary" onClick={this.toggleListen} > Listen </button> */}
                    <div id='final'></div>

                </div>
            </Wrapper >

        )
    }
}

export default Speech
