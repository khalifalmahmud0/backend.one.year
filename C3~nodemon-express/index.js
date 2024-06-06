let express = require("express");
let app = express();

app.get("/", (req, res) => {
  console.log("Get Method Working With Express");
  res.send("Get Method Working With Express");
});

app.listen(8989, "127.0.0.1", 10, () => {
  console.log("Server Running Properly");
});
