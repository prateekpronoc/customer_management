const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize(
	'mobility_core',
	'devuser',
	'D3vus3R@2022#',
	 {
	   host: '65.2.123.114',
	   dialect: 'mysql'
	 }
   );

const modelDefiners = [
	require('./models/user.model'),
	require('./models/customer.model'),
	require('./models/firebaseNotification.model'),
	require('./models/catalogValues'),
	require('./models/registration')
	// require('./models/instrument.model'),
	// require('./models/orchestra.model'),
	// Add more models here...
	// require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
