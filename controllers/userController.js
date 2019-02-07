const { User } = require('../models');

exports.create = async (req, res) => {
	const { name, number, library, birthday } = req.body;
	const user = { name, number, library, birthday };
	try {
		await User.create({ name, number, library, birthday });
		res.json({ user });
	} catch (error) {
		res.json({ error });
	}
};

exports.getAllUsers = async (req, res) => {
	try {
		const allUsers = await User.findAll();
		res.json({ allUsers });
	} catch (error) {
		res.json({ error });
	}
};
