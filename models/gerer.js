const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const uniqueValidator = require('mongoose-unique-validator');

const gere = Schema({
    local_id: {type:Schema.Types.ObjectId, ref:'locals', unique:false, required:true},
    service_budgetaire_id: {type:Schema.Types.ObjectId, ref:'serviceBudgetaires', unique:false, required:true}
});  

gere.plugin(uniqueValidator);

module.exports = model('geres', gere);