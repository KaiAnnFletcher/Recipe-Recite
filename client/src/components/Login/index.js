import React, { Component } from 'react';
import "./style.css";

function Login(props) {
return (

<div className="login styleLoginWrap">
  <div className="login-container styleLoginSubWrap">

  {props.status===1 ? 
  <div className="styleLoginError">
  {props.message}
  </div> 
  : 
  <div className="styleLoggedMsg">
  {props.message}
  </div>} 

  <form className="login styleLogin">

            <div className="form-group">
                <label htmlFor="title"><h4>LOGIN</h4></label>
                <input
                    onChange={props.handleLoginChange}
                    name="logusername"
                    type="text"
                    placeholder="Username"
                    value={props.username}
                    required
                />
                <input
                    onChange={props.handleLoginChange}
                    name="logpassword"
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