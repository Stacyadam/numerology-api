const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entryController');

router.get('/status', (req, res) => {
	res.json({ status: 'ok' });
});

router.post('/create', entryController.create);
router.get('/entries', entryController.getAllEntries);

module.exports = router;
