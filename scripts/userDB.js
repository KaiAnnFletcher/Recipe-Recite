// const mongoose = require("mongoose");
// const User = require("../models/user.js");

// mongoose.connect("mongodb://localhost/authentication", { useNewUrlParser: true });
// //Object containing  user data to save to the database
// var users = [
//     {
//         email: "szuchinlin3@gmail.com ",
//         password: "tiffany"
//     },
//     {
//         email: "sarah.sakhri@gmail.com ",
//         password: "sarah"
//     },
//     {
//         email: "kaiann.fletcher99@gmail.com",
//         password: "kaiann"
//     },
//     {
//         email: "chentao.tang@gmail.com ",
//         password: "kevin"
//     },
//     {
//         email: "davidm989@gmail.com ",
//         password: "david"
//     }
// ];

// User.create(users)
//   .then(function(dbUser) {
//     console.log(dbUser);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });