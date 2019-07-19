import React from "react";
// import React, { Component } from 'react';
import "./style.css";

function Register(props) {
return (


<div className="register styleRegisterWrap">
  <div className="register-container styleRegisterSubWrap">

    {props.status===1 ? 
                <div className="styleUserExists">
                {props.message}
                </div> 
                : 
                <div className="styleRegisterMsg">
                {props.message}
                </div>}

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


        </form>
  </div>
</div>
 )
}

export default Register;