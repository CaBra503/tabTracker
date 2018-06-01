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
			const user = await User.create(req.body)
			res.send(user.toJSON());
		} catch (error) {
			res.status(401).send({
				error: 'This email account is already in use.'
			})
		}
		console.log('user being registered:', user.toJSON());
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
			const isPasswordValid = await user.comparePassword(password);
			if (!isPasswordValid) {
				console.log('**incorrect Password**');
				return res.status(403).send({
					error: 'The Login information was incorrect.'
				});
			}
			const userJson = user.toJSON();
			console.log('user information:', userJson);
			res.send({
				user: userJson,
					token: jwtSignUser(userJson)
				})
			} catch (err) {
				console.log('**generic error**');
				res.status(500).send({
					error: 'An error has occured trying to log in'
				});
			}
			
			console.log(user.toJSON())
		}
		// End of login
}
