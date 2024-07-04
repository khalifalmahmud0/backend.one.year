const nodemailer = require("nodemailer");

let sendMail = async (name, mail) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dev.env.khalif@gmail.com",
        pass: "eprh lses trbb uwyp",
      },
    });
    const info = await transporter.sendMail({
      from: `"${name}👻" <${mail}>`,
      to: `${mail}`,
      subject: `Hello ✔ from ${name}`,
      html: `${name} - ${mail}`,
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendMail;
