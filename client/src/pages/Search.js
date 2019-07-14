import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import LinkBtn from "../components/LinkBtn";
import Bookmark from "../components/Bookmark";
import { Link } from "react-router-dom";
import "./style.css";


class Search extends Component {
    state = {
        search: "",
        input: "",
        data: [],
        verified: false,
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    componentDidMount() {
        API.scrapeAllRecipes()
            .then(data => {
                this.setState({ data: data.data })
            })
            .catch(err => { console.log(err) });
        API.scrapeRecipeById(this.state.data.id)
            .then(data => {
                console.log(data.data);
            })
        API.checkToken()
            .then(res => {
            if (res.status === 200) {
                this.setState({ verified: true });
            } 
            })
            .catch(err => {
            console.error(err);
            });
    }


    handleFormSubmit = event => {
        event.preventDefault();

        let fun = data => {

            this.setState({ data: data.data })

        };
        API.scrapeBySearch(this.state.search)
            .then(fun)
            .catch(err => { console.log(err) })
    }

    //handle saving 
    handleSaveClick = id => {
        API.bookmark({
            id: id
        })
            .then(res => console.log("saved "))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-6">
                        <SearchForm
                            search={this.state.search}
                            handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        {this.state.data.length ? (
                            <List>
                                {this.state.data.map(data => (
                                    <ListItem key={data.data}>
                                        <h3><strong>{data.title}</strong></h3>
                                        <Container>
                                            <img className ="StyleThumbnail" alt="thumbnail" src={data.thumbnail} ></img>
                                            <h5 className ="StyleAuthor">{data.author}</h5>
                                            <p>{data.summary}</p>

                                        </Container>

                                        {this.state.verified ? (
                                            <Bookmark
                                            id={data._id}
                                            onClick={this.handleSaveClick}
                                            />
                                        ) : (
                                        <Link to={"/UserPage"}>
                                            <Bookmark
                                            onClick={() => {return}}                                            />
                                        </Link>
                                        )}
                                        <Link to={"/RecipeSelect/" + data.linkid}>
                                            <LinkBtn
                                                linkid={data.linkid} 
                                            />
                                        </Link>
                                    </ ListItem>

                                ))}
                            </List>
                        ) : (
                                <p></p>
                            )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Search;