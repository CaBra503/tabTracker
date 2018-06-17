//Requireing authentication modules.
const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');	
const SongsController = require('./controllers/SongsController');	

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
	//route for showing songs.
	app.get('/songs/:songId',
		SongsController.show
	);

	// browse songs Enpoints
	app.get('/songs',
		SongsController.index
	);
	app.post('/songs',
		SongsController.post
	);
};
