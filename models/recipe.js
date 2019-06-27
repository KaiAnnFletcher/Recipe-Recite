const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    // id
    // name:
    // author:
    // description:
  id: { type: String, required: true },
  name: { type: String, required: true },
  author: String,
  img: String,
  description:String,

});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;