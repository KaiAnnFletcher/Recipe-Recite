
import React from "react";
// import {Container } from "../Grid";
// import { Link } from "react-router-dom";
import "./style.css";


function responsiveVoice(props) {
    return (

            <div className ="styleSelectRecipeWrap">

                        <img className ="styleSelectRecipethumbnail" alt="thumbnail" src={props.thumbnail}></img>
                        <h4>{props.title}</h4>
                        <p className ="styleSelectRecipeAuthor"><b>Author:</b> {props.author}</p>
                        <a className ="styleSelectRecipeLink" href={props.link}>Link to the Recipe Website</a>
                        <p className ="styleSummary"><h5>Summary: </h5>{props.summary}</p>
                        <br></br>
                        <br></br>
                        <h5>Ingredients: </h5>
                        <ul>
                            {props.ingredients.map(event => {
                                return <li>{event}</li>
                            })}
                        </ul>

                        <h5>Instructions: </h5>
                        <ul>
                            {props.instructions.map(event => {
                                return <li>{event}</li>
                            })}
                        </ul>
            <br></br>
            {/* <Link to={"/search"}>
                <button className="btn btn-primary"> Go back </button>
            </Link> */}
            </div>


    )
}

export default responsiveVoice;


