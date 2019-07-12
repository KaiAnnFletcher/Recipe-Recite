require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3001;
const app = express();
//code needed to deployment to heroku
// const favicon = require('express-favicon');
const path = require('path');
// const port = process.env.PORT || 8080;
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
// Connect to the Mongo DB


// mongoose.connect("mongodb://localhost/projectrecipes", { useNewUrlParser: true });


mongoose.connect(process.env.MONGODB_URI || "mongodb://reciperecite:Biochem3@ds151007.mlab.com:51007/heroku_1n2qxlrg")

//botkit - the brain of this bot lives in the controllers folder
require('./controllers/botkitcontroller')

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
