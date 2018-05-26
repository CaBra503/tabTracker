const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models/');
const config = require('./config/config');


//express server 
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

sequelize.sync().then(() => {
	app.listen(config.port);
	return console.log(`server has started on port: ${config.port}`);
});
