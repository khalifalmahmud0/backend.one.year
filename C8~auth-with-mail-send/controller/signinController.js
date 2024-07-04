const bcrypt = require("bcrypt");
const USERSIGNUP = require("../models/signupModel");

let signinController = async (req, res) => {
  try {
    let { mail, pass } = req.body;
    let userdata = await USERSIGNUP.findOne({ mail: mail });
    let hashPass = userdata?.pass;
    let check = await bcrypt.compare(pass, hashPass);

    return check ? res.send(`Login Success`) : res.send(`Fail to Login`);
  } catch (e) {
    console.log(e);
    res.send(`Internal Server Error!`);
  }
};

module.exports = signinController;
