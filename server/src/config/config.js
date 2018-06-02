module.exports = {
	//the process environment the port is running on.
	port: process.env.PORT || 8081,
	//specifying the database details.
	db: {
		//name of the database is the process environments db name or ..
		database: process.env.DB_NAME || 'tabTracker',
		//Database user
		user: process.env.DB_USER || 'tabTracker',
		password: process.env.DB_PASS || 'tabtracker',
		options: {
			//the dialect of the server
			dialect: process.env.DIALECT || 'sqlite',
			//the name of the ur.
			host: process.env.host || 'localhost',
			//where to store the database
			storage:'../tabTracker.sqlite3',
			//dissallowing operator aliases. op
			operatorsAliases: false 
		}
	},
	//config for authentication with jwt 
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	} 
};
