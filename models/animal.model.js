const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  latin_name: { type: String, required: true },
  animal_type: { type: String, required: true },
  active_time: { type: String, required: true },
  length_min: { type: Number, required: true },
  length_max: { type: Number, required: true },
  lifespan: { type: Number, required: true },
  habitat: { type: String, required: true },
  diet: { type: String, required: true },
  geo_range: { type: String, required: true },
  image_link: { type: String, required: true },
});

//Export model
module.exports = mongoose.model("Animal", AnimalSchema, "animal");
