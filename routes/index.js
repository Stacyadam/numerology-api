const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/status', (req, res) => {
	res.json({ status: 'ok' });
});

router.post('/create', userController.create);
router.get('/users', userController.getAllUsers);

module.exports = router;
