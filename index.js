const { sequelize } = require('./models');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const app = require('./app');

sequelize.sync().then(() => {
	console.log('DB connection successful');
	app.listen(process.env.PORT, () => {
		console.log(`Example app listening on port ${process.env.PORT}!`);
	});
});
