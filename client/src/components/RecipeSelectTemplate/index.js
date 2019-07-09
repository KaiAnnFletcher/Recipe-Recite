import React from "react";
import { Col, Row, Container } from "../Grid";


function RecipeSelectTemplate(props) {
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
                </Col>
            </Row>
        </Container >

    )
}

export default RecipeSelectTemplate;


