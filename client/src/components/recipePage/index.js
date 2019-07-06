
import React from "react";
import { Col, Row, Container } from "../Grid";


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
                        <p>{props.ingredients}</p>
                        <p>{props.instructions}</p>

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
                    </div >
                </Col>
            </Row>
        </Container >

    )
}

export default responsiveVoice;


