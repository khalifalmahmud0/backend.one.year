let express = require("express");
let mongoose = require("mongoose");
const USER = require("./models/user");
let app = express();

mongoose
  .connect(
    "mongodb+srv://devenvkhalif:ejFDrC7KFPWOobUs@sakibcluster.ry2em1f.mongodb.net/oneyearacademy"
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("DB Connection Fail");
  });

app.use(express.json());

app.post("/registration", (req, res) => {
  const { email, pass } = req.body;
  let DATA = new USER({ email, pass });
  let ifSave = DATA.save();
  ifSave
    ? res.send("User Created Successfully")
    : res.send("User Creation Fail");
});

app.listen(8087, "localhost", () => {
  console.log(`Server Running On Port 8087`);
});
