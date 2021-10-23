const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

router.post('/register', userController.registerUser);
router.get('/allUsers', userController.getAllUsers)

module.exports = router;