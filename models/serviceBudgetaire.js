const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const uniqueValidator = require('mongoose-unique-validator');

const serviceBudgetaire = Schema({
    nom: {type: String, required: true, unique: false}
});  

serviceBudgetaire.plugin(uniqueValidator);

module.exports = model('serviceBudgetaires', serviceBudgetaire);