module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME || 'tabTracker',
		user: process.env.DB_USER || 'tabTracker',
		password: process.env.DB_PASS || 'tabtracker',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.host || 'localhost',
			storage:'../tabTracker.sqlite',
			operatorsAliases: false 

		}

	}
};