const nodemailer = require("nodemailer");

let sendMail = async () => {
  try {
    // Correct SMTP configuration for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dev.env.khalif@gmail.com",
        pass: "eprh lses trbb uwyp",
      },
    });

    const info = await transporter.sendMail({
      from: '"Khalif AL Mahmud 👻" <gadgets.khalif@gmail.com>', // sender address
      to: "gadgets.khalif@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendMail;
