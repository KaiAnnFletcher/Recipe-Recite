import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import LinkBtn from "../components/LinkBtn";
import sampleData from "../utils/sampleData.json"; 
import Bookmark from "../components/Bookmark";
// import cheerio from "cheerio";


class Search extends Component {
    state = {
        search: "",
        results: sampleData,
        input: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };


    componentDidMount(){
        let fun = data => {
            console.log("****** = >",data.data);
        };
        API.scrapeBySearch("Kung Pao Chicken")
        .then(fun)
        .catch(err => { console.log(err)})
    }

    //Form Submission to search for recipe 

    // handleFormSubmit = event => {
    //     event.preventDefault();

    //     API.getRecipeFromWeb(this.state.search)
    //         .then(res => {
    //             this.setState({
    //             results: res.data.items
    //             });
    //     })
    //         .catch(err => console.log(err));
    // }


    //handle clicking on a specific result
    handleViewClick = link => {
        window.location = link;
    }
    //handle saving 
    handleSaveClick = item => {
        API.saveRecipe({
            title: item.title,
            author: item.author,
            summary: item.summary,
            thumbnail: item.thumbnail,
            link: item.link,
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
                        {this.state.results.length ? (
                            <List>
                                {this.state.results.map(data => (
                                    <ListItem key={data.title}>
                                        <h2><strong>{data.title}</strong></h2>
                                        <Container>
                                            <h5>{"Authors: "}</h5>
                                            <h2>{data.author}</h2>
                                        </Container>
                                        <Container
                                            id={data.id}
                                            key={data.id}
                                            title={data.title}
                                            thumbnail={data.thumbnail}
                                            summary={data.summary}
                                            author={data.author}
                                            value={this.state.title}

                                        />
                                        <Bookmark />
                                        <LinkBtn />
                                    </ListItem>

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