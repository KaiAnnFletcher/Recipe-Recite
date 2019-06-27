import React from "react";
// import "./style.css";

function RecipeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Author:</strong> {props.author}
          </li>
          <li>
            <strong>Summary:</strong> {props.summary}
          </li>
        </ul>
      </div>
      <span onClick={() => props.chooseRecipe(props.id)} className="choose">
        𝘅
      </span>
    </div>
  );
}

export default RecipeCard;