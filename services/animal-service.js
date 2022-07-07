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

function createAnimal(req) {
  const animal = new Animal({
    name: req.body.name,
    latin_name: req.body.latin_name,
    animal_type: req.body.animal_type,
    active_time: req.body.active_time,
    length_min: req.body.length_min,
    length_max: req.body.length_max,
    lifespan: req.body.lifespan,
    habitat: req.body.habitat,
    diet: req.body.diet,
    geo_range: req.body.geo_range,
    image_link: req.body.image_link,
  });

  return animal;
}

function registerUser(req) {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
  return user;
}

function putAnimal(req) {
  const { id: _id } = req.params;
  const newAnimal = {
    _id,
    name: req.body.name,
    latin_name: req.body.latin_name,
    animal_type: req.body.animal_type,
    active_time: req.body.active_time,
    length_min: req.body.length_min,
    length_max: req.body.length_max,
    lifespan: req.body.lifespan,
    habitat: req.body.habitat,
    diet: req.body.diet,
    geo_range: req.body.geo_range,
    image_link: req.body.image_link,
  };

  return newAnimal;
}

module.exports = {
  getAnimalById,
  getAllAnimal,
  findAndDeleteById,
  createAnimal,
  putAnimal,
  registerUser
};
