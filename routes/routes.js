const express = require("express");
const router = express.Router();
const Animal = require("../models/animal.model");
const bodyParser = require("body-parser");
const Feeding = require("../models/feeding.model");
const User = require("../models/user.model");
const animalService = require("../services/animal-service");
const authController = require("../controller/auth.controller");

// application/json parser
const jsonParser = bodyParser.json();

// animals GET
router.get("/animals", async (req, res) => {
  const animals = await animalService.getAllAnimal();
  res.send(animals);
});

// animals GET by Id
router.get("/animals/:id", async (req, res) => {
  const { id: _id } = req.params;
  const animal = await animalService.getAnimalById(_id);
  res.send(animal);
});

// animals POST
router.post("/animals", jsonParser, async (req, res, next) => {
  const animal = animalService.createAnimal(req);
  await animal.save(function (err, animal) {
    if (err) {
      return next(err);
    }
    res.send(201, animal);
  });
});


// animals DELETE by Id

router.delete("/animals/:id", async (req, res) => {
  const { id: _id } = req.params;
  const animals = await animalService.findAndDeleteById(_id);
  res.send("is delete", animals);
});

// animals PUT
router.put("/animals/:id", jsonParser, async (req, res) => {
  const { id: _id } = req.params;
  const newAnimal = await animalService.putAnimal(req);
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

// users GET
router.get("/users", async (req, res) => {
  const users = await User.find();
  console.log(users);
  res.send(users);
});

// users GET by Id
router.get("/users/:id", async (req, res) => {
  const { id: _id } = req.params;
  const users = await User.findById(_id);
  console.log(users);
  res.send(users);
});

// animals filter by location GET
router.get("/get-animals-by-location/:location", async (req, res) => {
  const { location: _location } = req.params;
  const animalsByLocation = await Animal.find({
    geo_range: _location,
  });
  console.log(animalsByLocation);
  res.send(animalsByLocation);
});


router.post("/login", jsonParser, authController.login);

module.exports = router;
