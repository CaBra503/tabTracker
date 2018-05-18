module.exports = (app) => {

	app.post('/register', (req, res) => {
		res.send({
		//Is being returned when the button is clicked
			message: `You have been Registered ${req.body.email}`
		});
	});
};
