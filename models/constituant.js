const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const uniqueValidator = require('mongoose-unique-validator');

const constituant = Schema({
    nom: {type: String, required: true, unique: false},
    description: {type: String, required: true, unique: false},
    quantite: {type: Number, required:true, unique:false},
    ref_documentation: {type: String, required:true, unique:false},
    prestation_id: {type: Schema.Types.ObjectId, ref:'prestations', unique:false, required:true},
    local_id: {type: Schema.Types.ObjectId, ref:'locals', unique:false, required:true}
});  

constituant.plugin(uniqueValidator);

module.exports = model('constituants', constituant);