// rautes/managerAuth.js
const { isLoggedIn, isLoggedOut } = require('../middleware/authMiddleware');
const managerAuthController = require('../controllers/managerAuthController');
const express = require('express');
const router = express.Router();


//router.get('/', isLoggedIn, managerAuthController.redirectToManagerzone);
router.get('/login', isLoggedOut, managerAuthController.login);
router.post('/login', managerAuthController.authenticate);
router.get('/logout', managerAuthController.logout);

module.exports = router;