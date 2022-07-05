const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  animalName: { type: String, required: true },
  type: { type: String, required: true },
  nickname: { type: String, required: true },
});

//Export model
module.exports = mongoose.model("Animal", AnimalSchema, "animal");
