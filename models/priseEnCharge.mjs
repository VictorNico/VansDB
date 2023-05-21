import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator');

const priseEnCharge = Schema({
    service_budgetaire_id: {type:Schema.Types.ObjectId, ref:'serviceBudgetaires', unique:false, required:true},
    prestation_id: {type:Schema.Types.ObjectId, ref:'prestations', unique:false, required:true}
});  

priseEnCharge.plugin(uniqueValidator);

module.exports = model('priseEnCharges', priseEnCharge);