const express = require('express');//express.js server
//Json body parser
const bodyParser = require('body-parser');
//Cors : 
const cors = require('cors');
//Morgan : 
const morgan = require('morgan');
//sqlite3
const {sequelize} = require('./models/');
//general server config
const config = require('./config/config');


//puling in required modules 
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);
//defining the routes for the webapp url

//To drop all tables in DB sync({force: true})
sequelize.sync().then(() => {
	//port the application is listening on
	app.listen(config.port);
	console.log(`server is on Port: ${config.port}`);
});
