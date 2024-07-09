const USERS = require("../models/user");

let mailVerification = async (req, res) => {
  let mail = await req.params.mail;
  let data = await USERS.findOneAndUpdate(
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
