import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

// import React from "react";
// // import { Link } from "react-router-dom";
// import "./style.css";



// function Login(props) {

//     return (
//     <form className="login formStyle">
//     <div className="form-group">
//         <label htmlFor="title"></label>
//         <input
//             value={props.search}
//             onChange={props.handleLoginUser}
//             name="username"
//             type="text"
//             placeholder="Username"
//         />
//         <input
//             value={props.search}
//             onChange={props.handleLoginPassword}
//             name="password"
//             type="text"
//             placeholder="password"
//         />
//         <button className="btn" type="submit" onClick={props.handleLoginSubmit}><i className="fa fa-user"></i></button>
//     </div>
//     </form>




//     )
// }

export default Login;

