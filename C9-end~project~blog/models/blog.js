let mongoose = require("mongoose");
// Create Schema
let schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
let BLOGS = mongoose.model("blog", schema);
module.exports = BLOGS;
