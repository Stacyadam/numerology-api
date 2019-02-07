const { Entry } = require('../models');

exports.create = async (req, res) => {
	const { name, number, library, birthday } = req.body;
	const entry = { name, number, library, birthday };
	try {
		await Entry.create({ name, number, library, birthday });
		res.json({ entry });
	} catch (error) {
		res.json({ error });
	}
};

exports.getAllEntries = async (req, res) => {
	try {
		const entries = await Entry.findAll();
		res.json({ entries });
	} catch (error) {
		res.json({ error });
	}
};
