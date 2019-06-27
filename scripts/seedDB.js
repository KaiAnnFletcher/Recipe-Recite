const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const recipeSeed = [
  {
    id: 1,
    name: "pistache",
    author:"Eric",
    img:"../img/sample.png",
    description: "Fresh Raspberries, pistachio mouse, raspeberry ganech & almond crust"
  },

];

db.Recipe
  .remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
