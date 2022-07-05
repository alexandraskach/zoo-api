const express = require("express");
const router = express.Router();
const Animal = require("./models/Animal");

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// animals GET
router.get("/animals", async (req, res) => {
  const animals = await Animal.find();
  res.send(animals);
});

// animals POST
// router.post("/animals", async (req, res) => {
//   const animal = new Animal({
//     type: req.body.type,
//     animalName: req.body.animalName,
//     nickname: req.body.nickname,
//   });
//   res.send(animal);
// });
module.exports = router;
