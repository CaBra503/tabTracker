const Joi = require('joi');

module.exports = {
	register (req, res, next) {
		//This object is used to define what we want to test against
		const schema = {
			//specifys that this must be a valid email address
			email: Joi.string().email(),
			//specifys that there must be a password matching
			password: Joi.string().regex(
				new RegExp('^[a-zA-Z0-9]{8,32}$')
			)
		};
		//Validating the input against the schema.
		const {error, value} = Joi.validate(req.body, schema);
		//returns Error if there is an error.
		if (error) {
			//Gives the key that failed, either Email or password.
			switch(error.details[0].context.key) {
			//email failure.
			case 'email':
				res.status(400).send({
					error: 'You must provide a valid email address.'
				});
				break;
			//password failure.
			case 'password':
				res.status(400).send({
					error: 'The password provided is in valid. /\n/ It MUST be only of the following: AlphabeticalCharacters, Lowercase, Upercase, numeric. <br> Additionally, The password can only be 8 long, and no longer than 32 characters.'
				});
				break;
			default: res.status(400).send({
				error: 'Invalid registration information.'
			});
			}
		} else {
			//if no error, proceed to next and register user.
			next();
		}
	}
};
