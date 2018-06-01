const {User} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser (user) {
	const ONE_WEEK = 60 * 60 * 24 * 7;
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	});
}

module.exports = {
	async register (req, res) {
		try {
			//on register create a user in the db with the http request body
			const user = await User.create(req.body)
			console.log('user being registered:', user.toJSON());
			res.send(user.toJSON());
			//if email is already in use throw error.
		} catch (error) {
			res.status(401).send({
				error: 'This email account is already in use.'
			})
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
			
			if (!user) {
				//check if user matches if not.
				console.log('**incorrect User information.**');
				return res.status(403).send({
					error: 'The Login information was incorrect.'
				});
			} 
			//testing if the password matches the stored password.
			const isPasswordValid = await user.comparePassword(password);
			
			if (!isPasswordValid) {
				//is password valid, if not
				console.log('**incorrect Password**');
				return res.status(403).send({
					error: 'The Login information was incorrect.'
				});
			}
			//convert userdata to JsonFormat send userJson and jwtToken to db
			const userJson = user.toJSON();
			console.log('user information:', userJson);
			res.send({
				user: userJson,
					token: jwtSignUser(userJson)
				})
		} catch (err) {
				//Throw Generic error if login endpoint fails
				console.log('**generic error**');
				res.status(500).send({
					error: 'An error has occured trying to log in'
				});
			}
			
			console.log(user.toJSON())
		}
		// End of login
}
