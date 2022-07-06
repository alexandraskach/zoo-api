const mongoose = require("mongoose");

const FeedingSchema = new mongoose.Schema({
  animal_nickname: { type: String, required: true },
  food: { type: String, required: true },
});

//Export model
module.exports = mongoose.model("Feeding", FeedingSchema, "feeding");
