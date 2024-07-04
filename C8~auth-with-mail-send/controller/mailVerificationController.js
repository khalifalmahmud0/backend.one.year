const USERSIGNUP = require("../models/signupModel");

let mailVerificationController = async (req, res) => {
  let mail = req.params.mail;
  let data = USERSIGNUP.findOneAndUpdate(
    { mail: mail },
    { verify: true },
    { new: true }
  );
  if (!data) {
    return res.send(`Email Not Found!`);
  } else {
    return res.send(`Email Verified`);
  }
};

module.exports = mailVerificationController;
