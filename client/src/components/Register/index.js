import React from "react";
// import React, { Component } from 'react';
import "./style.css";

function Register(props) {
return (


<div className="register styleRegisterWrap">
  <div className="register-container styleregisterWrap">
  <form className="register styleRegister">
  
            <div className="form-group">
                <label htmlFor="title"><h4>REGISTER</h4></label>
                <input
                    onChange={props.handleRegisterChange}
                    name="regusername"
                    type="text"
                    placeholder="choose a username"
                    value={props.username}
                    required
                />
                <input
                    onChange={props.handleRegisterChange}
                    name="regpassword"
                    type="password"
                    placeholder="choose a password"
                    value={props.password}
                    required

                />
                <button 
                className="btn searchBtn" 
                type="submit" 
                onClick={props.handleRegisterSubmit}>
                submit
                </button>
            </div>
            {props.status===1 ? <span style={{ color: 'red' }}>{props.message}</span> : <span style={{ color: 'green' }}>{props.message}</span>}
        </form>
  </div>
</div>
 )
}

export default Register;