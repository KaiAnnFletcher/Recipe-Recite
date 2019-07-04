import React from "react";

function responsiveVoice(props) {
    return (
        // <div>
        //     <h4>{props.title}</h4>
        //     <h4>{props.author}</h4>
        //     <h4>{props.summary}</h4>
        //     <h4>{props.thumbnail}</h4>
        //     <h4>{props.ingr}</h4>
        //     <h4>{props.steps}</h4>
        //     <button onClick={props.handleFormSubmit} className="btn btn-success">
        //         Play
        //     </button>
        // </div>

        <div className="container">
            <form>
                <div class="form-group">
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={props.handleInputChange}
                        value={props.input}
                    ></textarea>
                </div>
                <button onClick={props.handleFormSubmit} className="btn btn-success">
                    Play
            </button>
                <button id='microphone-btn' onClick={props.toggleListen}> Listen </button>

            </form>
        </div >
    )
}

export default responsiveVoice;


