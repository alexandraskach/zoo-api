var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  animalName: { type: String, required: true },
  type: { type: String, required: true },
  nickname: { type: String, required: true },
});

//Export model
module.exports = mongoose.model("Animal", AuthorSchema);
