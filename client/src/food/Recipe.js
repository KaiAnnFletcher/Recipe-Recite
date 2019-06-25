import React, { Component } from "react";
// import API from "../utils/API";

import { List, ListItem, Jumbotron, Col, Row, Container } from "../components/Layout"; //import boostrap layout
import { Input, FormBtn } from "../components/Form";//import form layout

class Recipe extends Component {
  state = {
    recipe: []
  };

  
  // componentDidMount() {
  //   this.loadRecipe()
  // };

  // loadRecipe = () => {
  //   API.getRecipe()
  //     .then(res => this.setState({ recipe: res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <Container>


      <Container fluid>
        <Row>
          <Col size="lg-10">
            <Jumbotron>
              <h1>Search for a Recipe</h1>
            </Jumbotron>
            <form>
              <Input name="recipeSearch" placeholder="Search for a Recipe" />
              <FormBtn>Search Recipe</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>


        {/* <Container fluid>
          <Row>
            <Col size="lg-10 sm-12">
              <Jumbotron>
                <h1>Here are your Search Results</h1>
              </Jumbotron>

              {this.state.recipe.length ? (
                <List>

                  {this.state.recipe.map(recipe => (

                    <ListItem key={recipe._id}>
                      <a href= {"/recipe/" + recipe._id}><img src={recipe._img}></img></a>
                      <a href={"/recipe/" + recipe._id}>
                        <strong>
                          {recipe.title} by {recipe.author}
                        </strong>
                      </a>
                    </ListItem>
                  ))}

                </List>
              ) : (
                <h3>No Results Found</h3>
              )}
            </Col>
          </Row>
        </Container> */}
    
    </Container>

    );
  }
}

export default Recipe;