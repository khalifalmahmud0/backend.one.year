let express = require("express");
let mongoose = require("mongoose");
const USER = require("./models/user");

mongoose
  .connect(
    "mongodb+srv://devenvkhalif:ejFDrC7KFPWOobUs@sakibcluster.ry2em1f.mongodb.net/oneyearacademy"
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((e) => {
    console.log(e);
  });

let app = express();
app.use(express.json());
//Registration
app.post("/reg", (req, res) => {
  const { name, phone, email } = req.body;
  let data = new USER({ name, phone, email });
  let ifsave = data.save();
  ifsave ? res.send(req.body) : "Something Went Wrong";
});
//get user
app.get("/user", async (req, res) => {
  try {
    const data = await USER.find();
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something Went Wrong", error: error.message });
  }
});
//update
app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await USER.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something Went Wrong", error: error.message });
  }
});

//delete
app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await USER.findByIdAndDelete(id);
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something Went Wrong", error: error.message });
  }
});

app.listen("8087", "localhost", () => {
  console.log("Server Run Successfully");
});
