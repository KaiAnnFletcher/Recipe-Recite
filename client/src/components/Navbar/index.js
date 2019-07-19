import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends Component {

  state = {
    user: "",
    verified: false,
};

  render() {
    return (
      <nav className="navbar navbar-expand-lg styleNav">
        <Link className="navbar-brand" to="/Search">
          <img alt="thumbnail" id="ApptitleNav" src="https://i.ibb.co/JjXYSBh/logo.png"></img>
        </Link>

                {/* verify if user is logged in. If yes, display userName*/}        
                {this.state.verified ? ( 
                        <span ></span> 
                        ) : (
                        <span className="styleUserloggedInStatus">
                          Welcome! 
                          <Link className="navbar-brand" to="/BookmarkPage">
                            <span className="styleUserName">

                             {/*USER ID*/} User    
                            {this.state.user}

                            </span>
                          </Link>
                        </span>)
                }
        

      </nav>
    );
  }
}


export default Navbar;