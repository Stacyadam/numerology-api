const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: 'ec2-23-21-128-35.compute-1.amazonaws.com',
	dialect: 'postgres',
	dialectOptions: {
		ssl: true
	}
});

const Entry = sequelize.import('./Entry');

module.exports = {
	Entry,
	sequelize
};
