var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    animalName: {type: String, required: true, maxLength: 100},
    type: {type: String, required: true, maxLength: 100},
    nickname: {type: String, required: true, maxLength: 100},
  }
);


//Export model
module.exports = mongoose.model('Dog', AuthorSchema);
