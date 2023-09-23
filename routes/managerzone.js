const express = require('express');
const router = express.Router();
const managersoneController = require('../controllers/managerzoneController');

router.get('/', managersoneController.dashboard);
router.get('/categories', managersoneController.manageCategories);
router.get('/products', managersoneController.manageProducts);
router.get('/groups', managersoneController.manageGroups);
router.get('/users', managersoneController.manageUsers);
router.get('/admins', managersoneController.manageAdmins);
router.get('/orders', managersoneController.manageOrders);

module.exports = router;