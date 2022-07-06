const express = require("express");
const router = express.Router();
const Animal = require("./models/Animal");
const bodyParser = require("body-parser");

// application/json parser
const jsonParser = bodyParser.json();

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

// animals PUT
router.put("/animals/:id", jsonParser, async (req, res) => {
  console.log("hello");
  const { id: _id } = req.params;
  const newAnimal = {
    _id,
    type: req.body.type,
    animalName: req.body.animalName,
    nickname: req.body.nickname,
  };

  Animal.findByIdAndUpdate(_id, newAnimal, (err) => {
    if (err) {
      res.json({
        newAnimal,
        success: false,
        msg: "Failed to update animal",
      });
    } else {
      res.json({ newAnimal, success: true, msg: "Animal updated" });
    }
  });
});

module.exports = router;
