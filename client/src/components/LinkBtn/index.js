import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function LinkBtn(props) {
  return (
    <button className="linkBtn" onClick={props.onClick}>
      <span>Select
        <Link className="navbar-brand" to="RecipeSelect"></Link>
        <Link to="/RecipeSelect" className={window.location.pathname === "/RecipeSelect" ? "nav-link active" : "nav-link"}></Link>
      </span>
    </button>
  );
}

export default LinkBtn;