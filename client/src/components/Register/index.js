import React from "react";
// import React, { Component } from 'react';

function Register(props) {
return (

<div className="register ">
  <div className="register-container">
  <form className="register styleregister">
            <div className="form-group">
                <label htmlFor="title"></label>
                <input
                    onChange={props.handleRegisterChange}
                    name="register"
                    type="text"
                    placeholder="choose a username"
                />
                <input
                    value={props.password}
                    onChange={props.handleRegisterChange}
                    name="password"
                    type="text"
                    placeholder="choose a password"
                />
                <button 
                className="btn searchBtn" 
                type="submit" 
                onClick={props.handleRegisterSubmit}>
                submit
                </button>
            </div>
        </form>
  </div>
</div>
 )
}

export default Register;