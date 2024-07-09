const bcrypt = require("bcrypt");
const USERS = require("../models/user");
let signUp = async (req, res) => {
  try {
    let { name, mail, pass } = req.body;
    let hashPass = await bcrypt.hash(pass, 10);
    let finalData = { name: name, mail: mail, pass: hashPass };
    let userdata = await USERS.findOne({ mail: mail });
    if (userdata) {
      return res.send(`User Already Exist`);
    }
    let data = new USERS(finalData);
    let ifsave = data.save();
    ifsave ? res.send(req.body) : "Something Went Wrong";
  } catch {
    res.send(`Internal Server Error!`);
  }
};
module.exports = signUp;
