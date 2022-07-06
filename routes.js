const express = require("express");
const router = express.Router();
const Animal = require("./models/Animal");
const bodyParser = require("body-parser");
const Feeding = require("./models/Feeding");

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

// feedings GET
router.get("/feedings", async (req, res) => {
  const feedings = await Feeding.find();
  console.log(feedings);
  res.send(feedings);
});

// feedings POST
router.post("/feedings", jsonParser, async (req, res, next) => {
  console.log(req.body);
  const feeding = new Feeding({
    animal_name: req.body.animal_name,
    diet: req.body.diet,
    zoo_assistant: req.body.zoo_assistant,
  });
  feeding.save(function (err, feeding) {
    if (err) {
      return next(err);
    }
    res.send(201, feeding);
  });
});
// feedings PUT
router.put("/feedings/:id", jsonParser, async (req, res) => {
  console.log("hello");
  const { id: _id } = req.params;
  const newFeeding = {
    _id,
    animal_name: req.body.animal_name,
    diet: req.body.diet,
    zoo_assistant: req.body.zoo_assistant,
  };

  Feeding.findByIdAndUpdate(_id, newFeeding, (err) => {
    if (err) {
      res.json({
        newFeeding,
        success: false,
        msg: "Failed to update feeding",
      });
    } else {
      res.json({ newFeeding, success: true, msg: "Feeding updated" });
    }
  });
});

module.exports = router;
