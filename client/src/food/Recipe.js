import React, { Component } from "react";
import API from "../utils/API";

import { List, ListItem, Jumbotron, Col, Row, Container } from "../components/Layout"; //import boostrap layout
import { Input, FormBtn } from "../components/Form";//import form layout
import cheerio from "cheerio";
import { Link } from "react-router-dom";

class Recipe extends Component {
  state = {
    recipe: [],
      id:"",
      name:"",
      img:"",
      description:""
  };

  
  componentDidMount() {
    this.loadRecipe()
  };

  loadRecipe = () => {
    API.scrapeAllRecipes()
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.id) {
      API.saveRecipe({
        id: this.state.id,
        name: this.state.name,
        img: this.state.img,
        description: this.state.description,
      })
        .then(res => this.loadRecipe())
        .catch(err => console.log(err));
    }
  };

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
              <Input 
              name="name"
              placeholder="Search for a Recipe"
              value={this.state.name}
              onChange={this.handleInputChange}
              />
              <FormBtn
              disabled={!(this.state.id && this.state.name)}
              onClick={this.handleFormSubmit}
              >Search Recipe</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>


      <Container>
      <Col size="lg-10">
      <h3>Results</h3>
            {this.state.recipe.length ? (
              <List>
                {this.state.recipe.map(recipe => (
                  <ListItem key={recipe._id}>
                    <Link to={"/recipe/" + recipe._id}>
                      <strong>
                        {recipe.name} by {recipe.author}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

      </Container>



    
    </Container>

    );
  }
}

export default Recipe;