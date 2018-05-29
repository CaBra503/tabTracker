const {User} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser () {
	const ONE_WEEK = 60 * 60 * 24 * 7;
	return jwt.sign(user, config.authentication.jwtSecret,{
		exiresIn: ONE_WEEK
	})
}

module.exports = {
	async register (req, res) {
		try {
			const user = await User.create(req.body)
			res.send(user.toJSON())
		} catch (error) {
			res.status(400).send({
				error: 'This email account is already in use.'
			})
		}
	},
	async login (req, res) {
		try {
			const{email, password} = req.body
			const user = await User.findOne({
				where: {
					email: email 
				}
			})
			if(!user) {
				return res.status(403).send({
					error: 'The Login information was incorrect.',
				});
			}
			
			const isPasswordValid = password === user.password;
			if(!isPasswordValid){
				res.status(403).send({
					error: 'The Login information was incorrect.'
				})
			}
			const userJson = user.toJSON();
			console.log('user', userJson)
			res.send({
				user: userJson,
				token: jwtSignUser(userJson)
			})
			
		} catch (error) {
			res.status(500).send({
				error: 'An error has occured trying to log in'
			})
		}
	}
	// End of login
}
