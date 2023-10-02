//rautes/managerZone.js

const managerZoneController = require('../controllers/managerZoneController');
const authMiddleware = require('../middleware/authMiddleware');
const express = require('express');
const router = express.Router();


router.get('/', authMiddleware.isLoggedIn, managerZoneController.dashboard);
router.get('/categories', authMiddleware.isLoggedIn, managerZoneController.manageCategories);
router.get('/products', authMiddleware.isLoggedIn, managerZoneController.manageProducts);
router.get('/groups', authMiddleware.isLoggedIn, managerZoneController.manageGroups);
router.get('/users', authMiddleware.isLoggedIn, managerZoneController.manageUsers);
router.get('/admins', authMiddleware.isLoggedIn, managerZoneController.manageAdmins);
router.get('/orders', authMiddleware.isLoggedIn, managerZoneController.manageOrders);

module.exports = router;