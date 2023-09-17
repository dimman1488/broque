const express = require('express');
const router = express.Router();
const pageController = require('../controllers/productController');

router.get('/', pageController.getAllProducts);  // changed to getAllProducts

module.exports = router;
