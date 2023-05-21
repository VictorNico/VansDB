const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const uniqueValidator = require('mongoose-unique-validator');

const marche = Schema({
    numero: {type: String, required: true, unique: false},
    nature: {type: String, required: true, unique: false},
    date: {type:Date, required:true, unique:false},
    CoutTotalPrestation: {type:Number, required:true, unique:false},
    entreprise_id: {type:Schema.Types.ObjectId, ref:'entreprises', unique:false, required:false}
});  

marche.plugin(uniqueValidator);

module.exports = model('marches', marche);