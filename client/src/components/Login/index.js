import React from "react";
import React, { Component } from 'react';
import "./style.css";

function Login(props) {
return (

<div className="login">
  <div className="login-container">
  <form className="login styleLogin">
            <div className="form-group">
                <label htmlFor="title"><h4>LOGIN</h4></label>
                <input
                    onChange={props.handleLoginChange}
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={props.username}
                    required
                />
                <input
                    onChange={props.handleLoginChange}
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={props.password}
                    required

                />
                <button 
                className="btn searchBtn" 
                type="submit" 
                onClick={props.handleLoginSubmit}>
                submit
                </button>
            </div>
        </form>
  </div>
</div>
 )
}

export default Login;