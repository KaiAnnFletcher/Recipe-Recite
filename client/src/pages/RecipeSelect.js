
import React, { Component } from "react"
import "./style.css";
import ResposiveVoice from "../components/recipePage";
import { Link } from "react-router-dom";
import Bookmark from "../components/Bookmark";
import {Container } from "../components/Grid";
// import Wrapper from "../components/Wrapper";
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
            recipe: {},
            ingredients: [],
            instructions: [],
            verified: false
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
        speech += "Here are the ingridients that you will need ."

        for (var j = 0; j < this.state.ingredients.length; j++) {

            speech += this.state.ingredients[j];
        }

        speech += "Follow these instructions to prepare your meal .";
        for (var i = 0; i < this.state.instructions.length; i++) {
            speech += this.state.instructions[i];
        }

        window.responsiveVoice.speak(speech, "UK English Female", { rate: 0.88 }, { pitch: 2 }, { volume: 2 });
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

            console.log("1 " + interimTranscript);
            console.log("2 " + finalTranscript);

            //-------------------------COMMANDS------------------------------------

            const transcriptArr = finalTranscript.split(' ')
            const stopCmd = transcriptArr.slice(-2)
            console.log('stopCmd -----', stopCmd);
         
                if (stopCmd[0] === 'stop') {
                    recognition.stop();
                    recognition.onend = () => {
                        console.log('Stopped listening per command');
                        window.responsiveVoice.cancel();
                    }
                } else if (stopCmd.includes('pause')) {
                        console.log(" ##########   pause works   ######### ");
                        recognition.stop();
                        window.responsiveVoice.pause();

                } else if (stopCmd.includes('play')) {
                        console.log(" ##########   RESUME works   ######### ")
                        window.responsiveVoice.resume();
                        recognition.end();
                       
                }
        
        }
    

        recognition.onerror = event => {
            console.log("Error occurred in recognition: " + event.error)
        }
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
        API.checkToken()
            .then(res => {
            if (res.status === 200) {
                this.setState({ verified: true });
            } 
            })
            .catch(err => {
            console.error(err);
            });
    }

    //handle saving 
    handleSaveClick = id => {
        API.bookmark({
            id: id
        })
            .then(res => console.log("saved"))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <div className="container styleRecipeSelect">

                    {this.state.verified ? (
                        <Bookmark
                        id={this.state.recipe._id}
                        onClick={this.handleSaveClick}
                        />
                    ) : (
                    <Link to={"/UserPage"}>
                        <Bookmark
                        onClick={() => {return}}                                            />
                    </Link>
                    )}

                    <button onClick={this.toggleListen} className="btn btn-success playBtn styleplayBtn">
                        Play
                    </button>

                    <ResposiveVoice
                        title={this.state.recipe.title}
                        author={this.state.recipe.author}
                        summary={this.state.recipe.summary}
                        link={this.state.recipe.link}
                        thumbnail={this.state.recipe.thumbnail}
                        instructions={this.state.instructions}
                        ingredients={this.state.ingredients}
                    />
                </div>
            </Container >

        )
    }
}

export default Speech
