import React, { Component } from "react";
import SearchBar from "../Search3";
import SearchCard from "../Pages3/RecipeCard";
import sampleData from "../sampleData.json"; 
// import API from "../utils/API";
// import cheerio from "cheerio";

class DisplayCard extends Component {
  // Setting this.state.data to the sampleData json array
  state = {
    sampleData
  };

//////////TO WORK WITH SCRAPING & API////////////////
  // state = {
  //   title: "",
  //   summary:"",
  //     link:"",
  //     thumbnail:"",
  //     author:""
  // };

  // componentDidMount() {
  //   this.loadRecipe()
  // };

  // loadRecipe = () => {
  //   API.scrapeAllRecipes()
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.name && this.state.id) {
  //     API.saveRecipe({
  //       id: this.state.id,
  //       name: this.state.name,
  //       img: this.state.img,
  //       description: this.state.description,
  //     })
  //       .then(res => this.loadRecipe())
  //       .catch(err => console.log(err));
  //   }
  // };





  // enterLink = id => {
  //   //create a function to enter the link to enter the recipe card 
  // };

  // Map over this.state.sampleData and render a SearchCard component for each sampleData object
  render() {
    return (
     <div>
       <SearchBar />
        <h4>Recipes</h4>
        {this.state.sampleData.map(data => (
          <SearchCard
          // enterLink={this.enterLink}
          id={data.id}
          key={data.id}
          title={data.title}
          thumbnail={data.thumbnail}
          summary={data.summary}
          author={data.author}
          value = {this.state.title} 
        />

        ))}
      </div>
    );
  
  }
}

export default DisplayCard;