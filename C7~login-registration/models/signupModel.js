let mongoose = require("mongoose");

let schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
});
let USERSIGNUP = mongoose.model("register_user", schema);
module.exports = USERSIGNUP;
