require("dotenv").config();
let express = require("express");
const apiMiddleware = require("./middlewares/api");
const signUp = require("./controllers/signUp");
const signIn = require("./controllers/signIn");
const mailVerification = require("./controllers/mailVerification");
const connectDB = require("./db/connection");
const CreateBlog = require("./controllers/blog/create");

let app = express();
let PORT = process.env.PORT || 7000;

app.use(express.json());
connectDB();

// API
app.post("/signup", signUp);
app.get("/signin", signIn);
// Blog
app.post("/blog/create", CreateBlog);
app.get("/:mail", mailVerification);

app.listen(PORT, "localhost", () => {
  console.log(`Server Running on ${PORT}`);
});
