import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    }
  }

  componentDidMount() {
    fetch('/api/user')
      .then(res => res.text())
      .then(res => this.setState({message: res}));
  }

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}    

// import React, { Component } from "react";
// // import API from "../utils/API";
// // import { List, ListItem } from "../components/List";
// // import ViewBtn from "../components/LinkBtn";
// // import { Col, Row, Container } from "../components/Grid";
// // import DeleteBtn from "../components/DeleteBtn";
// import Login from "../components/Login"

// //USERPAGE.  
// //HAS TO BE LOGGED IN BEFORE THEY CAN VIEW ANYTHI
// class Saved extends Component {

//     state = {
//         username: [],
//         passoword: [],
//     };

//   handleLoginUser = event => {
//     this.setState({ search: event.target.value });
//   };
//   handleLoginPassword = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleLoginSubmit = event => {
//     event.preventDefault();
//   }
    
//     render() {
//         return (

//         <div className="styleLogin">
//           <Login
//             search={this.state.search}
//             handleFormSubmit={this.handleLoginSubmit}
//             handleInputChange={this.handleLoginUser}
//             handleLoginPassword={this.handleLoginPassword}
//           />
//         </div>      
//                 // <Container fluid>
//     //             <Row>
//     //                 <Col size="md-12">
//     //                     <h3>Bookmarked Recipes</h3>
//     //                     {this.state.recipes.length ? (
//     //                         <List>
//     //                             {this.state.recipes.map(recipe => (
//     //                                 <ListItem key={recipe.title}>
//     //                                     <Container>
//     //                                     <h4><strong>{recipe.title}</strong></h4>
//     //                                     <b>
//     //                                         <span>{"Author: "}</span>
//     //                                         <span>{recipe.author}</span>
//     //                                     </b>
//     //                                     </Container>
//     //                                     <br></br>
//     //                                     <Container>
//     //                                     <p><img alt="recipeImg" src={recipe.thumbnail}/>{recipe.summary ? (recipe.summary) : ("No Description Available")}</p>        
//     //                                     <DeleteBtn onClick={() => this.handleDeleteClick(recipe.title)}/>
//     //                                     </Container>                                        
//     //                                 </ListItem>
//     //                             ))}
//     //                         </List>
//     //                     ) : (
//     //                             <h5>You haven't bookmarked anything yet</h5>
//     //                         )}
//     //                 </Col>
//     //             </Row>
//     //         </Container>





//         );
//      }


// }


export default Login;