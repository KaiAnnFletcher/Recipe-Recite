import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Bookmark(props) {
    return (
        <button className="BookmarkBtn" {...props}>
            <i class="fa fa-bookmark"><Link className="navbar-brand" to="RecipeSelect"></Link>
                <Link to="/UserPage" className={window.location.pathname === "/UserPage" ? "nav-link active" : "nav-link"}></Link></i>
        </button>
    );
}

export default Bookmark;