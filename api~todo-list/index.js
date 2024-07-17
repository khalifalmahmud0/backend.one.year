require("dotenv").config();
let express = require("express");
const ConnectDB = require("./db/connect");
let app = express();
let PORT = process.env.PORT || 8000;
app.use(express.json());

const run = async () => {
  try {
    let db = await ConnectDB();
    app.listen(PORT, "localhost", () => {
      console.log(
        `server running at http://localhost:${PORT} and db connected at ${db}`
      );
    });
  } catch (error) {
    console.log(`Error From Index`, error);
  }
};

run();
