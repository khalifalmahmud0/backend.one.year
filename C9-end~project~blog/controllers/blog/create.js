const BLOGS = require("../../models/blog");

let CreateBlog = async (req, res) => {
  try {
    let { title, description, image, postedBy } = req.body;
    let data = new BLOGS({
      title: title,
      description: description,
      image: image,
      postedBy: postedBy,
    });
    let ifsave = await data.save();

    if (ifsave) {
      //   await sendMail(name, mail);
      res.send(req.body);
    } else {
      res.send("Something Went Wrong");
    }
  } catch (e) {
    console.log(`Blog Creation fail`, e);
  }
};
module.exports = CreateBlog;
