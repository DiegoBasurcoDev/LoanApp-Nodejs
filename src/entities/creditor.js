const { Schema, model } = require('mongoose');

const creditorSchema = new Schema({
    name: String,
    lastname: String,
	status: Number,
    idUser: String
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('Creditor', creditorSchema);