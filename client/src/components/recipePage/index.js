
import React from "react";

function responsiveVoice(props) {
    return (
        <div>
            {/* <h4>Title: {props.title}</h4>
            <h4>Author: {props.author}</h4>
            <h4>Summary: {props.summary}</h4>
            <img>Thumbnail: {props.thumbnail}</img>
            <h4>Link: {props.link}</h4> */}

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


