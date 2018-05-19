//This is the User model.
module.exports = (sequelize, DataTypes) => 
	sequelize.define('user', {
		email:{
			type: DataTypes.STRING,
			unique: true
		},
		password: DataTypes.STRING
	});
