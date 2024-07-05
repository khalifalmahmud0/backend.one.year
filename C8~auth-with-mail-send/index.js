require("dotenv").config();
let express = require("express");
const signupController = require("./controller/signupController");
const signinController = require("./controller/signinController");
const connectDB = require("./db/connection");
const mailVerificationController = require("./controller/mailVerificationController");
let app = express();
let PORT = process.env.PORT;
app.use(express.json());
// Connect DB
connectDB();
// API
app.post("/signup", signupController);
app.get("/signin", signinController);
app.get("/:mail", mailVerificationController);
// Server
app.listen(5000, "localhost", () => {
  console.log(`Sever Running At Port ${PORT}`);
});
