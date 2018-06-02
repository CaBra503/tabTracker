const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword (user, options) {
	const SALT_FACTOR = 12;
	
	if (!user.changed('password')){
		return;
	}
	return bcrypt
		.genSaltAsync(SALT_FACTOR)
		.then(salt => bcrypt
			.hashAsync(user.password, salt, null)).then(hash => {
			user.setDataValue('password', hash);
			console.log('hashed pass');
		});
}

//This is the User model.
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		email:{
			type: DataTypes.STRING,
			unique: true
		},
		password: DataTypes.STRING
	},{
		hooks: {
			beforeCreate: hashPassword,
			beforeUpdate: hashPassword
			//beforeSave: hashPassword
			/*Runs hash pass twice. On Creation and storing in db */
		}
	});

	User.prototype.comparePassword = function(password) {
		return bcrypt.compareAsync(password, this.password);
	};
	
	return User;
};