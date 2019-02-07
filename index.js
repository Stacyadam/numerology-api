if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const { sequelize } = require('./models');

const app = require('./app');

sequelize.sync().then(() => {
	console.log('DB connection successful');
	app.listen(process.env.PORT, () => {
		console.log(`Numerology App running on port ${process.env.PORT}!`);
	});
});
