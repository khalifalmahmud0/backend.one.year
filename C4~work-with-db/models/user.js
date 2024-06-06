let mongoose = require("mongoose");
let schema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    pass: {
      type: String,
    },
  },
  { timestamps: true }
);

let USER = mongoose.model("user", schema);
module.exports = USER;
