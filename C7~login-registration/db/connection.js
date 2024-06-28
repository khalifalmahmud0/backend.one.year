const mongoose = require("mongoose");

let connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("DB Connected");
  } catch (e) {
    console.log(`DB Connection Fail: ${e.message}`);
  }
};

module.exports = connectDB;
