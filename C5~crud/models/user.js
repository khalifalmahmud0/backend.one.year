let mongoose = require("mongoose");
let SCHEMA = mongoose.Schema;
let MODEL = mongoose.model;

let user = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CLASSFIVEUSERMODEL", user);
