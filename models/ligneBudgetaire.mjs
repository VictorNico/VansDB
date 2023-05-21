import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator');

const ligneBudgetaire = Schema({
    code: {type: String, required: true, unique: false},
    montant: {type:Number, required:true, unique:false},
    equipement_id: {type:Schema.Types.ObjectId, ref:'equipements', unique:false, required:true},
    service_budgetaire_id: {type:Schema.Types.ObjectId, ref:'serviceBudgetaires', unique:false, required:true}
});  

ligneBudgetaire.plugin(uniqueValidator);

module.exports = model('ligneBudgetaires', ligneBudgetaire);