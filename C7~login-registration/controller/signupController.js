const bcrypt = require("bcrypt");
const USERSIGNUP = require("../models/signupModel");
let signupController = async (req, res) => {
  try {
    let { name, mail, pass } = req.body;
    let hashPass = await bcrypt.hash(pass, 10);
    let finalData = { name: name, mail: mail, pass: hashPass };
    let userdata = await USERSIGNUP.findOne({ mail: mail });
    if (userdata) {
      return res.send(`User Already Exist`);
    }
    let data = new USERSIGNUP(finalData);
    let ifsave = data.save();
    ifsave ? res.send(req.body) : "Something Went Wrong";
  } catch {
    res.send(`Internal Server Error!`);
  }
};
module.exports = signupController;
