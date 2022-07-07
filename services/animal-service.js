const express = require("express");
const router = express.Router();
const Animal = require("../models/animal.model");
const User = require("../models/user.model");

async function getAnimalById(_id) {
  const animals = await Animal.findById(_id);
  return animals;
}

async function getAllAnimal() {
  const animals = await Animal.find();
  return animals;
}

async function findAndDeleteById(_id) {
  try {
    const animals = await Animal.findByIdAndDelete(_id);
    if (animals == null || undefined) {
      return animals;
    }
  } catch (error) {
    console.log("erreur occured while deleting animal", error);
  }
}

module.exports = { getAnimalById, getAllAnimal, findAndDeleteById };
