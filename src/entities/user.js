const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    username: String,
    password: String,
	status: Number
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('User', userSchema);