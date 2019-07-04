    
import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import ViewBtn from "../components/LinkBtn";
import { Col, Row, Container } from "../components/Grid";
import DeleteBtn from "../components/DeleteBtn";


//USERPAGE.  
//HAS TO BE LOGGED IN BEFORE THEY CAN VIEW ANYTHING







class Saved extends Component {
    state = {
        recipes: []
    }
    componentDidMount() {
        this.loadRecipes();
    }
    loadBooks = () => {
        API.getRecipes()
            .then(res => {
                this.setState({ recipes: res.data });
            })
    }
    handleViewClick = link => {
        
        window.location = link;
         
    }
    handleDeleteClick = id => {
        API.deleteRecipe(id)
            .then(res => {
                console.log("deleted recipe");
                this.loadRecipes();
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <h3>Bookmarked Recipes</h3>
                        {this.state.recipes.length ? (
                            <List>
                                {this.state.recipes.map(recipe => (
                                    <ListItem key={recipe.title}>
                                        <Container>
                                        <h4><strong>{recipe.title}</strong></h4>
                                        <b>
                                            <span>{"Author: "}</span>
                                            <span>{recipe.author}</span>
                                        </b>
                                        </Container>
                                        <br></br>
                                        <Container>
                                        <p><img alt="recipeImg" src={recipe.thumbnail}/>{recipe.summary ? (recipe.summary) : ("No Description Available")}</p>        
                                        <DeleteBtn onClick={() => this.handleDeleteClick(recipe.title)}/>
                                        <ViewBtn onClick={() => this.handleViewClick(recipe.link)} />
                                        </Container>
                                        
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h5>You haven't bookmarked anything yet</h5>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Saved;