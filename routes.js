const express = require("express");
const router = express.Router();
// import Animal from "./models/Animal";
const Animal = require("./models/Animal");
const bodyParser = require("body-parser");

// create application/json parser
const jsonParser = bodyParser.json();

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// animals GET
router.get("/animals", async (req, res) => {
  const animals = await Animal.find();
  console.log(animals);
  res.send(animals);
});

// animals POST
router.post("/animals", jsonParser, async (req, res, next) => {
  console.log(req.body);
  const animal = new Animal({
    type: req.body.type,
    animalName: req.body.animalName,
    nickname: req.body.nickname,
  });
  animal.save(function (err, animal) {
    if (err) {
      return next(err);
    }
    res.send(201, animal);
  });
});
module.exports = router;
