
import React from "react";
import { Col, Row, Container } from "../Grid";
// import { Link } from "react-router-dom";
import "./style.css";


function responsiveVoice(props) {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <div>
                        <img alt="thumbnail" src={props.thumbnail}></img>
                        <h4>{props.title}</h4>
                        <h5>Author: </h5>
                        <p>{props.author}</p>
                        <a href={props.link}>Link to the Recipe Website</a>
                        <h5>Summary: </h5>
                        <p>{props.summary}</p>

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
                    </div >
                </Col>
            </Row>
            <br></br>
            {/* <Link to={"/search"}>
                <button className="btn btn-primary"> Go back </button>
            </Link> */}
        </Container>

    )
}

export default responsiveVoice;


