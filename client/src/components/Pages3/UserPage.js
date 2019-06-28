import React from "react";
import React, { Component } from "react";
import SearchCard from "../Pages3/RecipeCard";
import "./style.css";
// import API from "../utils/API";

class UserPage extends Component {
    state = {
      user:"",
      password:"",
      favourite:[],
    };

render(){
    return (
        <div>
         <h4>Hello</h4>
         {this.state.user.map(users => (
          <div>
             <h3>{users.id}</h3>
                <p>Here are a list of your favourite Recipes</p>
                <div>
                    <ul>{this.state.favourite.map(recipe => <li key={recipe}> {recipe} </li>)}</ul>
                </div>
          </div>
         ))};
  

       </div>
    );
  ;}
}
  
  export default UserPage;