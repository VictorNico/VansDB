import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator');

const prestation = Schema({
    description: {type: String, required: true, unique: false},
    depensePrevue: {type: Number, required: true, unique: false},
    cout: {type:Number, required:true, unique:false},
    dateMarche: {type:String, required:true, unique:false},
    nomEntreprise: {type:String, required:true, unique:false},
    statut: {type:String, required:true, unique:false},
    marche_id: {type:Schema.Types.ObjectId, ref:'marches', unique:false, required:false}
});  

prestation.plugin(uniqueValidator);

module.exports = model('prestations', prestation);