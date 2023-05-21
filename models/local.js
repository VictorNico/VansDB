const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const uniqueValidator = require('mongoose-unique-validator');

const local = Schema({
    nom: {type: String, required: true, unique: false},
    description: {type: String, required: true, unique: false},
    diagnostique: {type:String, required:true, unique:false},
    date_diagnostique: {type:Date, required:true, unique:false},
    equipement_id: {type:Schema.Types.ObjectId, ref:'equipements', unique:false, required:false}
});  

local.plugin(uniqueValidator);

module.exports = model('locals', local);