import React, { Component } from "react";
// import { Col, Row, Container } from "../components/Grid";
import Wrapper from "../components/Wrapper";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Login from "../components/Login";
import Register from "../components/Register";

class User extends Component {
    state = {
      username:"",
      password:"",
    };

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
    }
    // componentDidMount() {
    //     API.searchAllUsers()
    //         .then(results => {
    //             this.setState({  results: results.results})
    //         })
    //         .catch(err => { console.log(err) });
    //     API.searchAllUserById(this.state.results.id)
    //         .then(results => {
    //             console.log(results.results);
    //         })
    // }

    handleRegisterSubmit = event => {
        event.preventDefault();
        let user = data => {
            this.setState({ data: data.data })
        }
    };

    handleLoginSubmit = event => {
        event.preventDefault();
        let login = results => {
            this.setState({ results: results.results })
        }
        // API.searchByUser(this.state.search)
        //     .then(user)
        //     .catch(err => { console.log(err) })
    };

    // //handle user saving 
    // handleSaveUser = item => {
    //     API.saveUser({
    //      //write code
    //     })
    //         .then(res => console.log("saved "))
    //         .catch(err => console.log(err));
    // }

    render() {
        return (
          <Wrapper>
        
                  <Register
                      handleRegisterSubmit={this.handleRegisterSubmit}
                      handleRegisterChange={this.handleInputChange}
                  />
                     
                  <Login
                    search={this.state.search}
                    // handleLoginSubmit={this.handleLoginSubmit}
                    handleLoginChange={this.handleInputChange}
                    />
         

            </Wrapper>
        )
    }
}

export default User;