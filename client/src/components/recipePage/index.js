
import React from "react";
import { Col, Row, Container } from "../Grid";


function responsiveVoice(props) {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <div>
                        <h4>Title: {props.title}</h4>
                        <h4>Author: {props.author}</h4>
                        <h4>Summary: {props.summary}</h4>
                        {/* <img alt="thumbnail" src={props.thumbnail}></img> */}
                        <h4>Link: {props.link}</h4>

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
                </Col>
            </Row>
        </Container>

    )
}

export default responsiveVoice;


