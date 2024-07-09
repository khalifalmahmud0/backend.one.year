const nodemailer = require("nodemailer");

let sendMail = async (name, mail) => {
  let mailVerificationUrl = `${process.env.ORIGIN_URL}/${mail}`;
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
      subject: `Mail Verification - Auth Management Team`,
      html: `<body style=font-family:Arial,sans-serif;background-color:#f4f4f4;margin:0;padding:0><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td align=center style="padding:10px 0"><table border=0 cellpadding=0 cellspacing=0 width=600 style="background-color:#fff;border:1px solid #ddd"><tr><td align=center style=padding:20px;color:#fff;font-size:24px;font-weight:700 bgcolor=#007bff>Auth Management<tr><td align=center style=padding:20px;font-size:16px><p>Hi ${name},<p>Congratulations on creating your account!<p>Please verify your email address by clicking the button below:<p style="padding:10px 0"><a href="${mailVerificationUrl}"style="background-color:#007bff;color:#fff;padding:10px 20px;text-decoration:none;border-radius:5px">Verify Email</a><p>If you did not create this account, please ignore this email.<p>Thank you,<br>Auth Management Team<tr><td align=center style=padding:10px;font-size:12px;color:#555 bgcolor=#f4f4f4>© 2024 Auth Management Team. All rights reserved.</table></table>`,
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendMail;
