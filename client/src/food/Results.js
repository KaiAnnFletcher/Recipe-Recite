import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Results extends Component {
  state = {
    book: {}
  };
//   componentDidMount() {
//     API.getRecipt(this.props.match.params.id)
//       .then(res => this.setState({ recipe: res.data }))
//       .catch(err => console.log(err));
//   }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.recipe.id} by {this.state.recipe.name}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                {this.state.recipe.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Recipes</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Results;