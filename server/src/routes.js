//Requireing authentication modules.
const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');	

module.exports = (app) => {
	//Defines that on post method the register route must pass through the authenticaiton controller policies.
	app.post('/register',
		AuthenticationControllerPolicy.register,
		AuthenticationController.register
	);
	//same for login.
	app.post('/login',
		AuthenticationController.login
	);
};
