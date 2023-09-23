const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/about', pageController.getAboutPage);
router.get('/contact', pageController.getContactPage);
router.get('/terms', pageController.getTermsPage);

module.exports = router;