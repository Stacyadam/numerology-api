const Sequelize = require('sequelize');

const sequelize = new Sequelize(
	'd8kgul66jsei7o',
	'mtjsjhjbsojzsw',
	'674384c6a8981eaeb7c3b13d535cdc86d46d5d9fceb9332681e1e295acf9566a',
	{
		host: 'ec2-23-21-128-35.compute-1.amazonaws.com',
		dialect: 'postgres',
		dialectOptions: {
			ssl: true
		}
	}
);

const models = {
	User: sequelize.import('./User')
};

module.exports = {
	models,
	sequelize
};
