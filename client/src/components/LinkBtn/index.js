import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function LinkBtn(props) {
  return (
    <button className="linkBtn" onClick={props.onClick}>
      <i class="fa fa-link"><Link className="navbar-brand" to="RecipeSelect"></Link>
        <Link to="/RecipeSelect" className={window.location.pathname === "/RecipeSelect" ? "nav-link active" : "nav-link"}></Link></i>
    </button>
  );
}

export default LinkBtn;