import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator');

const entreprise = Schema({
    numero: {type: String, required: true, unique: false},
    nom: {type: String, required: true, unique: false},
    adresse: {type:String, required:true, unique:false}
});  

entreprise.plugin(uniqueValidator);

module.exports = model('entreprises', entreprise);