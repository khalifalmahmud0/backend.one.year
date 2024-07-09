require("dotenv").config();
let express = require("express");
const apiMiddleware = require("./middlewares/api");
const signUp = require("./controllers/signUp");
const signIn = require("./controllers/signin");
const mailVerification = require("./controllers/mailVerification");

let app = express();
let PORT = process.env.PORT || 7000;

app.use(express.json());

// API
app.post("/signup", apiMiddleware, signUp);
app.get("/signin", apiMiddleware, signIn);
app.get("/:mail", apiMiddleware, mailVerification);

app.listen(PORT, "localhost", () => {
  console.log(`Server Running on ${PORT}`);
});
