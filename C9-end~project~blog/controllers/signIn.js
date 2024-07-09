const bcrypt = require("bcrypt");
const USERS = require("../models/user");

let signIn = async (req, res) => {
  try {
    let { mail, pass } = req.body;
    let userdata = await USERS.findOne({ mail: mail, verify: true });
    if (!userdata) {
      return res.send(`User Not Verified`);
    }
    let hashPass = userdata?.pass;
    let check = await bcrypt.compare(pass, hashPass);
    return check ? res.send(`Login Success`) : res.send(`Fail to Login`);
  } catch (e) {
    console.log(e);
    res.send(`Internal Server Error!`);
  }
};

module.exports = signIn;
