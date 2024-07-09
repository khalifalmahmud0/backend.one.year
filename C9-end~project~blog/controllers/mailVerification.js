const USERS = require("../models/user");

let mailVerification = async (req, res) => {
  let mail = req.params.mail;
  let data = USERS.findOneAndUpdate(
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

module.exports = mailVerification;
