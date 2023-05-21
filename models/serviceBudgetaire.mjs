import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator');

const serviceBudgetaire = Schema({
    nom: {type: String, required: true, unique: false}
});  

serviceBudgetaire.plugin(uniqueValidator);

module.exports = model('serviceBudgetaires', serviceBudgetaire);