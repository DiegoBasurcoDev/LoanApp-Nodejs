const { Schema, model } = require('mongoose');

const creditorSchema = new Schema({
    name: String,
    lastname: String,
	status: Number,
    idUser: Number
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('Creditor', creditorSchema);