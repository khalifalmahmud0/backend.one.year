let mongoose = require("mongoose");
let CONNECTION_URL = `${process.env.MONGODB_URL}${process.env.DB_NAME}`;

let ConnectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(CONNECTION_URL);
    return connectionInstance.connection.host;
  } catch (error) {
    throw error;
  }
};
module.exports = ConnectDB;
