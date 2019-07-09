
import React from "react";
import { Col, Row, Container } from "../Grid";
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
                        <h5>Summary: </h5>
                        <p>{props.summary}</p>
                        <a href={props.link}>Link to the Recipe Website</a>
                    </div >
                    
                    <div  className="IngredientStyle">
                    <br></br>
                    <p><b>INGREDIENTS</b></p>
                            <p>{props.ingredients1}</p>
                            <p>{props.ingredients2}</p>
                            <p>{props.ingredients3}</p>
                            <p>{props.ingredients4}</p>
                            <p>{props.ingredients5}</p>
                            <p>{props.ingredients6}</p>
                            <p>{props.ingredients7}</p>
                            <p>{props.ingredients8}</p>
                            <p>{props.ingredients9}</p>
                            <p>{props.ingredients10}</p>
                    </div>

                    <div  className="InstructionsStyle">
                    <p><b>STEPS</b></p>
                            <p>{props.instructions1}</p>
                            <p>{props.instructions2}</p>
                            <p>{props.instructions3}</p>
                            <p>{props.instructions4}</p>
                            <p>{props.instructions5}</p>
                            <p>{props.instructions6}</p>
                            <p>{props.instructions7}</p>
                            <p>{props.instructions8}</p>
                    </div>

                        {/* <form>
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
                        </form> */}

                </Col>
            </Row>
        </Container >

    )
}

export default responsiveVoice;


