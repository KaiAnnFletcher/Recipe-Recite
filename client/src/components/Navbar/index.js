import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

class Navbar extends Component {

  state = {
    user: "",
    verified: false,
};

    componentDidMount() {
        API.checkToken()
            .then(res => {
            if (res.status === 200) {
                this.setState({ verified: true });
                API.getUsername()
                  .then(data => {
                  this.setState({ user: data.data.username })
                  })
            } 
            })
            .catch(err => {
            console.error(err);
            });
    }

  render() {
    return (
      <nav className="navbar navbar-expand-lg styleNav">
        <Link className="navbar-brand" to="/Search">
          <img alt="thumbnail" id="ApptitleNav" src="https://i.ibb.co/JjXYSBh/logo.png"></img>
        </Link>

                {/* verify if user is logged in. If yes, display userName*/}        
                {this.state.verified ? ( 
                        <span className="styleUserloggedInStatus">
                          Welcome! 
                          <Link className="navbar-brand" to={"/BookmarkPage/" + this.state.user}>
                            <span className="styleUserName">

                            {this.state.user}

                            </span>
                          </Link>
                        </span>
                        ) : (
                        <span className="styleUserloggedInStatus">
                          Welcome! 
                          <Link className="navbar-brand" to="/UserPage">
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