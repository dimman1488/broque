const express = require('express');
const router = express.Router();
const managerzoneController = require('../controllers/managerzoneController');

router.get('/', managerzoneController.dashboard);
router.get('/categories', managerzoneController.manageCategories);
router.get('/products', managerzoneController.manageProducts);
router.get('/groups', managerzoneController.manageGroups);
router.get('/users', managerzoneController.manageUsers);
router.get('/admins', managerzoneController.manageAdmins);
router.get('/orders', managerzoneController.manageOrders);

module.exports = router;