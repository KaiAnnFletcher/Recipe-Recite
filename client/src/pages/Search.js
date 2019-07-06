import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import LinkBtn from "../components/LinkBtn";
// import sampleData from "../utils/sampleData.json";
import Bookmark from "../components/Bookmark";
// import RecipePage from "../components/recipePage";
// import cheerio from "cheerio";


class Search extends Component {
    state = {
        search: "",
        // results: sampleData,
        input: "",
        data: []


    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };


    handleFormSubmit = event => {
        event.preventDefault();

        let fun = data => {

            console.log("****** = >", data.data);
            console.log(data.data[1].title);
            this.setState({ data: data.data })

        };
        API.scrapeBySearch(this.state.search)
            .then(fun)
            .catch(err => { console.log(err) })
    }


    //Form Submission to search for recipe 

    // handleFormSubmit = event => {
    //     event.preventDefault();

    //     API.scrapeBySearch(this.state.search)
    //     .then(res => {
    //         this.setState({
    //             results: res.data.items
    //         });
    //     })
    //     .catch(err => console.log(err));
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
                        {this.state.data.length ? (
                            <List>
                                {this.state.data.map(data => (
                                    <ListItem key={data.data}>
                                        <h2><strong>{data.title}</strong></h2>
                                        <Container>
                                            <img src={data.thumbnail} ></img>
                                            <h5>{data.author}</h5>
                                            <p>{data.summary}</p>
                            
                                        </Container>
             
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