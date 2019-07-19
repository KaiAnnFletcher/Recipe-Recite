import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Home extends Component {

    render() {
        return (
            <div className="container-fluid styleHomePage">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 

                <Link to={"/Search"}>
                    <div className="container-fluid stylePgLink">Click here to begin</div>
                </Link>
            </div>
        )
    }
}

export default Home;