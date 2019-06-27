const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String, required: true,
  password: String, required: true,
  favorites: []
});

const User = mongoose.model("users", userSchema);

module.exports = User;
