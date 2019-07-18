import React, { Component } from 'react';
import "./style.css";

function Login(props) {
return (

<div className="login styleformWrap">
  <div className="login-container StyleloginWrap">
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
            {props.status===1 ? <span style={{ color: 'red' }}>{props.message}</span> : <span>{props.message}</span>}
        </form>
  </div>
</div>
 )
}

export default Login;