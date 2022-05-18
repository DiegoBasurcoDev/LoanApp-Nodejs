const { Schema, model } = require('mongoose');

class User {
    /**
	 * @param {string} id User identifier
	 * @param {string} name User name
	 * @param {string} lastname User lastname
	 * @param {string} email User email
	 * @param {string} username User username
	 * @param {string} password User hashed password
	 */
	constructor(id, name, lastname, email, username, password) {
		this.id = id;
		this.name = name;
        this.lastname = lastname;
		this.email = email;
        this.username = username;
		this.password = password;
	}
}

const userSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    username: String,
    password: String
},{
    timestamps: true,
    versionKey: false
});

const userModel = model('User', userSchema);

module.exports = model('User', userSchema);