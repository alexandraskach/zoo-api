const mongoose = require("mongoose");

const FeedingSchema = new mongoose.Schema({
  animal_name: { type: String, required: true },
  diet: { type: String, required: true },
  zoo_assistant: { type: String, required: true },
});

//Export model
module.exports = mongoose.model("Feeding", FeedingSchema, "feeding");
