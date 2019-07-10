import React from "react";
import "./style.css";

function SearchForm(props) {
    return (

<div class="search ">
  <div class="search-container">
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
                className="btn btn-warning searchBtn" 
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