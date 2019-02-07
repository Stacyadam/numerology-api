const { models } = require('../models');
const { User } = models;

exports.create = async (req, res) => {
	const { name, number, library, birthday } = req.body;
	await User.create({ name, number, library, birthday });
	res.json({ user: 'created' });
};
