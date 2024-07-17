require("dotenv").config();
let express = require("express");
const ConnectDB = require("./db/connect");
let app = express();
let PORT = process.env.PORT || 8000;
app.use(express.json());

const run = async () => {
  try {
    // Database
    let db = await ConnectDB();
    // Server
    await app.listen(PORT, "localhost", () => {
      console.log(
        `server running at http://localhost:${PORT} and db connected at ${db}`
      );
    });
    // Routes
    app.get("/", (req, res) => {
      res.send("Allah Is Almight");
    });
  } catch (error) {
    console.log(error);
  }
};

run();
