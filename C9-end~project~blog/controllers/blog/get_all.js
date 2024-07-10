const BLOGS = require("../../models/blog");

let GetAll = async (req, res) => {
  try {
    let data = await BLOGS.find({}).populate("postedBy");
    res.send({ data: data });
  } catch (e) {
    console.log(`Blog Creation fail`, e);
  }
};
module.exports = GetAll;
