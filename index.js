const express = require("express");
const app = express();
const port = 3000;
const router = require('./routes');

const mongoose = require("mongoose");

let mongoDBURL = "mongodb://127.0.0.1:27017/zoo";
mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = mongoose.connection;

database.on("error", console.error.bind(console, "connection error:"));
database.on("open", () => {
  console.log("connected to database");
});

app.get("/", (req, res) => {
  res.send("Hello World express!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.use('/api', router);