require("dotenv").config();
let express = require("express");
const multer = require("multer");
const path = require("path");
const apiMiddleware = require("./middlewares/api");
const signUp = require("./controllers/signUp");
const signIn = require("./controllers/signIn");
const mailVerification = require("./controllers/mailVerification");
const connectDB = require("./db/connection");
const CreateBlog = require("./controllers/blog/create");
const GetAll = require("./controllers/blog/get_all");

let app = express();
let PORT = process.env.PORT || 7000;

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
connectDB();
// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const unique_suffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    // Split the filename into name and extension
    const fileNameParts = file.originalname.split(".");
    const extension = fileNameParts.pop(); // Get the extension
    const name = fileNameParts.join("."); // Get the name without the extension

    // Process the name
    const lowerCaseFileName = name.toLowerCase().replace(/[^a-z0-9]/g, "_");
    const finalFileName = `${lowerCaseFileName}_${unique_suffix}.${extension}`;
    cb(null, finalFileName);
  },
});

const upload = multer({ storage: storage });
// API
app.post("/signup", signUp);
app.get("/signin", signIn);
// Blog
app.post("/blog/create", upload.single("image"), CreateBlog);
app.get("/blog/get_all", GetAll);
app.get("/:mail", mailVerification);

app.listen(PORT, "localhost", () => {
  console.log(`Server Running on ${PORT}`);
});
