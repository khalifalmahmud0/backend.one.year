require("dotenv").config();
let express = require("express");
const apiMiddleware = require("./middleware/secureApi");
const nidController = require("./controller/nidController");
const contactController = require("./controller/contactController");
let app = express();
let PORT = process.env.PORT;
app.use(express.json());
// Middleware & Controller
app.get("/", apiMiddleware, nidController);

// Work With Field Validation
app.post("/contact", contactController);

app.listen(PORT, "localhost", () => {
  console.log(`Server Running On Port ${PORT}`);
});
