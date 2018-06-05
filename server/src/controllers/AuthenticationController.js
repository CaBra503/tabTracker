const {User} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
//JsonWebToken helper method to generate the jwt-token
function jwtSignUser (user) {
	//sets the time of expiration of token
	const ONE_WEEK = 60 * 60 * 24 * 7;
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	});
}

module.exports = {
	async register (req, res) {
		try {
			//on register create a user in the db with the http request body
			const user = await User.create(req.body);
			const userJson = user.toJSON();
		console.log('user being registered:', userJson);
			res.send({
				user: userJson,
				token: jwtSignUser(userJson)
			});
			//if email is already in use throw error.
		} catch (err) {
			res.status(400).send({
				error: 'This email account is already in use.'
			});
		}
	},
	//login endpoint. requires request and response.
	async login (req, res) {
		try {
			//user email and user password in request body
			const{email, password} = req.body;
			// find the given email against the emails stored in db
			const user = await User.findOne({
				where: {
					email: email
				}
			});
			/*
			Gives a verbose log of the user object.
			console.log('user logging in: ', user)
			
			*/
			if (!user) {
				//check if user matches if not.
				console.log('**incorrect User information.**');
				return res.status(403).send({
					error: 'The Login information was incorrect.'
				});
			} 
			//testing if the password matches the stored password.
			const isPasswordValid = await user.comparePassword(password);
			console.log(isPasswordValid);
			
			if (!isPasswordValid) {
				//is password valid, if not
				console.log('**incorrect Password**');
				return res.status(403).send({
					error: 'The Login information was incorrect.'
				});
			}
			//convert userdata to JsonFormat send userJson and jwtToken to db
			const userJson = user.toJSON();
			console.log('user information requested for login:', userJson);
			res.send({
				user: userJson,
					token: jwtSignUser(userJson)
				});
		} catch (err) {
			//Throw Generic error if login endpoint fails
		console.log('**generic error**');
			res.status(500).send({
				error: 'An error has occured trying to log in'
			});
		}
	}
}
	// End of logic