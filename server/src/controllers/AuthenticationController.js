const {User} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser (user) {
	const ONE_WEEK = 60 * 60 * 24 * 7;
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	})
}

module.exports = {
	async register (req, res) {
		try {
			const user = await User.create(req.body)
			res.send(user.toJSON());
			console.log('user', userJson);
		} catch (error) {
			res.status(400).send({
				error: 'This email account is already in use.'
			})
		}
	},
	async login (req, res) {
		try {
			const{email, password} = req.body;
			const user = await User.findOne({
				where: {
					email: email 
				}
			});

			if (!user) {
				console.log('**incorrect User information.**');
				return res.status(403).send({
					error: 'The Login information was incorrect.'
				});
			}
			const isPasswordValid = await User.comparePassword(password);
			if (!isPasswordValid) {
				console.log('**incorrect Password**')
				return res.status(403).send({
					error: 'The Login information was incorrect.'
				})
			}
				console.log('THIS IS PASSING THE CHECKS');
				const userJson = user.toJSON();
				console.log('user', userJson);
				res.send({
					user: userJson,
					token: jwtSignUser(userJson)
				});

		} catch (err) {
			console.log('**generic error**');
			res.status(500).send({
				error: 'An error has occured trying to log in'
			});
		}
		
	}
	// End of login
}
