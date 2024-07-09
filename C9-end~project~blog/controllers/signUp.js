const bcrypt = require("bcrypt");
const USERS = require("../models/user");
const sendMail = require("../utils/sendMail");
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
    let ifsave = await data.save();

    if (ifsave) {
      await sendMail(name, mail);
      res.send(req.body);
    } else {
      res.send("Something Went Wrong");
    }
  } catch (e) {
    console.log(e);
    res.send(`Internal Server Error!`);
  }
};
module.exports = signUp;
