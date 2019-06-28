import React from "react";
import "./style.css";

//This will display after a search for recipe has been made
function SearchCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.thumbnail} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.title}
          </li>
          <li>
            <strong>Summary:</strong> {props.summary}
          </li>
          <li>
            <strong>Author:</strong> {props.author}
          </li>
        </ul>
        {/* <span onClick={() => props.enterLink(props.id)} className="select">
        Select
      </span> */}
      </div>
    </div>
  );
}

export default SearchCard;