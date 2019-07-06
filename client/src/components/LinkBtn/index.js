import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function LinkBtn(props) {
  return (
    <Link to="/RecipeSelect" className={window.location.pathname === "/RecipeSelect" ? "nav-link active" : "nav-link"}>
    <button className="linkBtn" onClick={props.onClick}>
      <span>Select
        <Link className="navbar-brand" to="RecipeSelect"></Link>
        
      </span>
    </button>
    </Link>
  );
}

export default LinkBtn;