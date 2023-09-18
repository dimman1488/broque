const express = require('express');
const router = express.Router();
const pageController = require('../controllers/productController');

router.get('/', pageController.getAllProducts);  
router.get('/:id', pageController.getProductById);


module.exports = router;
