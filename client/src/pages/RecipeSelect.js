
import React, { Component } from "react"
import ResposiveVoice from "../components/recipePage";

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
            input: "",
            title: "testing"
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
    handleInputChange = event => {
        console.log(event.target.value);

        this.setState({
            input: event.target.value,
        })
    };
    handleFormSubmit = event => {
        // event.preventDefault();
        console.log(event);
        // alert(this.state.input);
        window.responsiveVoice.speak(this.state.input, "UK English Female");
    }

    render() {
        return (
            <div className="container">
                <ResposiveVoice
                    handleInputChange={this.handleInputChange}
                    title={this.state.title}
                >
                </ResposiveVoice>
                <button onClick={this.handleFormSubmit} onClick={this.toggleListen} className="btn btn-success">
                    Play / Listen
                </button>
                {/* <button className="btn btn-primary" onClick={this.toggleListen} > Listen </button> */}
                <div id='final'></div>
            </div>
        )
    }
}

export default Speech
