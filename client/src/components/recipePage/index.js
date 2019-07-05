
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
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Example text-to-speech</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={props.handleInputChange}
                        value={props.input}
                    ></textarea>
                </div>

            </form>
        </div >
    )
}

export default responsiveVoice;


