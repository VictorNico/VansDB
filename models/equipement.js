const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const uniqueValidator = require('mongoose-unique-validator');

const equipement = Schema({
    nom: {type: String, required: true, unique: false},
    description: {type: String, required: true, unique: false}
});  

equipement.plugin(uniqueValidator);

module.exports = model('equipements', equipement);