const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
const router = require("./routes/routes");
const mongoose = require("mongoose");
// const {
//   checkTokenMiddleware,
//   extractBearerToken,
// } = require("./middleware/authentication");

console.log(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = mongoose.connection;

database.on("error", console.error.bind(console, "onnection error:"));
database.on("open", () => {
  console.log("Connected to database");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`API is listening on port ${port}!`);
});
