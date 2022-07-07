const express = require("express");
const router = express.Router();
const Animal = require("./models/animal.model");



export function getAnimalById(_id) {
    const animals = await Animal.findById(_id);
    return animals;
}

export function getAllAnimal() {
    const animals = await Animal.find();
    return animals;
}



export function findAndDeleteById(_id) {

    try {
        const animals = await Animal.findByIdAndDelete(_id);
        if (animals == null || undefined) {
        return animals;
        }
        
    } catch (error) {
        console.log('erreur occured while deleting animal', error);
        
    }
}





