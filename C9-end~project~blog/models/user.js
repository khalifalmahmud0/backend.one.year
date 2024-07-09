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
  verify: {
    type: Boolean,
    default: false,
  },
});
let USERS = mongoose.model("user", schema);
module.exports = USERS;
