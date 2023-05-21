import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator');

const equipement = Schema({
    nom: {type: String, required: true, unique: false},
    description: {type: String, required: true, unique: false}
});  

equipement.plugin(uniqueValidator);

module.exports = model('equipements', equipement);