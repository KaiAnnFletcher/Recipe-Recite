import React from "react";
import "./style.css";

function SearchForm(props) {
    return (

<<<<<<< HEAD

<div className="search ">
  <div className="search-container">
=======
<div class="search ">
  <div class="search-container">
>>>>>>> master
  <form className="search styleSearch">
            <div className="form-group">
                <label htmlFor="title"></label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="title"
                    type="text"
                    placeholder="Search for a Recipe"
                />
                <button 
                className="btn searchBtn" 
                type="submit" 
                onClick={props.handleFormSubmit}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </form>
  </div>
</div>



    )
}

export default SearchForm;