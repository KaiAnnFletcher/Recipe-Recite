import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg styleNav">
        <Link className="navbar-brand" to="/">
          <img alt="thumbnail" id="ApptitleNav" src="https://i.ibb.co/JjXYSBh/logo.png"></img>
        </Link>

      </nav>
    );
  }
}


export default Navbar;