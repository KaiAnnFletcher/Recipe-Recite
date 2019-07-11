import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Bookmark(props) {
    return (
        <button className="BookmarkBtn btn btn-warning" onClick={() =>props.onClick(props.id)}>
            <span>Bookmark
                <Link className="navbar-brand" to="RecipeSelect"></Link>              
                
            </span>
        </button>
    );
}

export default Bookmark;