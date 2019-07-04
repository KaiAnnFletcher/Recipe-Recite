import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../Login"
import "./style.css";


//Verifies User authentication
class Navbar extends Component {
  state = {
      username: [],
      passoword: [],
  };

  handleLoginUser = event => {
      this.setState({ search: event.target.value });
  };
  handleLoginPassword = event => {
      this.setState({ search: event.target.value });
  };

  handleLoginSubmit = event => {
      event.preventDefault();
  //write code
  //if found a match for both username & password, activate link to userPage
  //else display login error message

{/* <Link className="navbar-brand" to="userPage">
<Link to="/userPage" className={window.location.pathname === "/userPage" ? "nav-link active" : "nav-link"}>  */}
  }

    render() {
      return (
        <nav className="navbar navbar-expand-lg styleNav">
          <Link className="navbar-brand" to="/">
          <img id="ApptitleNav" src="https://i.ibb.co/JjXYSBh/logo.png"></img>
          </Link>
          <div className="styleLogin">
          <Login
              search={this.state.search}
              handleFormSubmit={this.handleLoginSubmit}
              handleInputChange={this.handleLoginUser}
              handleLoginPassword={this.handleLoginPassword}
          />
          </div>
        </nav>
      );
    }
}

export default Navbar;