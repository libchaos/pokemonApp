'use strict';

// Require dependency
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PokemonSchema = new Schema({
  name: String,
  picture: String,
  description: String
});


PokemonSchema.statics.isValidName = function (name) {
	if (name) {
		return true;
	}
	return false;
};



// Compile the model and export it so other modules can use it
module.exports = mongoose.model('Pokemon', PokemonSchema);