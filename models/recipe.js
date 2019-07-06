const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
    summary: String,
    link: String,
    thumbnail: String,
    author: String,
    linkid: String
});

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;