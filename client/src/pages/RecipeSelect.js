
import React, { Component } from "react"
// import RecipeSelectTemplate from "../components/RecipeSelectTemplate";
import ResposiveVoice from "../components/recipePage";
import { Link } from "react-router-dom";
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
        }, this.handleListen)
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
            const stopCmd = transcriptArr.splice(-3, -1)
            console.log('stopCmd', stopCmd);
            // console.log(stopCmd[0]);
            // console.log(stopCmd[1]);

            if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening') {
                recognition.stop()
                recognition.onend = () => {
                    console.log('Stopped listening per command');
                    const finalText = transcriptArr.slice(0, -3).join(' ')
                    document.getElementById('final').innerHTML = finalText
                }
            } else
                if (stopCmd[0] === 'pause') {
                    console.log("pause works");
                    window.responsiveVoice.pause();
                } else if (stopCmd[0] === 'resume') {
                    window.responsiveVoice.resume();
                }
        }

        recognition.onerror = event => {
            console.log("Error occurred in recognition: " + event.error)
        }
    }
    // -------------------------RESPONSIVE VOICE JS------------------------------------
    // handleInputChange = event => {
    //     console.log(event.target.value);

    //     this.setState({
    //         input: event.target.value,
    //     })
    // };


    handleFormSubmit = event => {
        // console.log(event);
        window.responsiveVoice.speak(this.state.recipe.title, "UK English Female", { rate: .7 }, { pitch: 2 }, { volume: 2 });
    }
    // component did mount will grab the id of the recipe from the url to populate component with data
    componentDidMount() {
        API.getRecipeById(this.props.match.params.id)
            .then(res => this.setState({ recipe: res.data },
                // console.log(res.data)
            )).catch(err => console.log(err));
        API.scrapeRecipeById(this.props.match.params.id)
            .then(data => {
                // console.log(data.data);
                console.log(data.data.instructions)
                this.setState({
                    instructions: data.data.instructions,
                    ingredients: data.data.ingredients
                })
            })
    }

    render() {
        return (
            <Wrapper >
                <div className="container styleRecipeSelect">

                    <Link to={"/UserPage"}>
                        <Bookmark />
                    </Link>

                    <ResposiveVoice
                        title={this.state.recipe.title}
                        author={this.state.recipe.author}
                        summary={this.state.recipe.summary}
                        link={this.state.recipe.link}
                        thumbnail={this.state.recipe.thumbnail}
                    
                        // handleInputChange={this.handleInputChange}
                        ingredients1={this.state.ingredients[0]}
                        ingredients2={this.state.ingredients[1]}
                        ingredients3={this.state.ingredients[2]}
                        ingredients4={this.state.ingredients[3]}
                        ingredients5={this.state.ingredients[4]}
                        ingredients6={this.state.ingredients[5]}
                        ingredients7={this.state.ingredients[6]}
                        ingredients8={this.state.ingredients[7]}
                        ingredients9={this.state.ingredients[8]}
                        ingredients10={this.state.ingredients[9]}

                        instructions1={this.state.instructions[0]}
                        instructions2={this.state.instructions[1]}
                        instructions3={this.state.instructions[2]}
                        instructions4={this.state.instructions[3]}
                        instructions5={this.state.instructions[4]}
                        instructions6={this.state.instructions[5]}
                        instructions7={this.state.instructions[6]}
                        instructions8={this.state.instructions[7]}
                    />
         
                    <br></br>
                    <button onClick={this.handleFormSubmit} className="btn btn-success">
                        Play
                </button>
                    <button className="btn btn-primary" onClick={this.toggleListen} > Listen </button>
                <div id='final'></div>

                </div>
            </Wrapper>

        )
    }
}

export default Speech
