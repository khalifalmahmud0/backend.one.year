require("dotenv").config();
let express = require("express");
let app = express();
let PORT = process.env.PORT;
app.use(express.json());
app.post("/signup", (req, res) => {
  res.send("From Registration");
});
app.get("/signin", (req, res) => {
  res.send("From Signup");
});
app.listen(5000, "localhost", () => {
  console.log(`Sever Running At Port ${PORT}`);
});
