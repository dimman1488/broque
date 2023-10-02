
// controllers/managerZoneController.js

exports.dashboard = (req, res) => {
    // Render the main dashboard page
    res.render('managerZone/layout', { content: '../managerZone/dashboard' });
}; 

exports.manageCategories = (req, res) => {
    res.render('managerZone/layout', { content: '../managerZone/manage-categories'});
};

exports.manageProducts = (req, res) => {
    res.render('managerZone/layout', { content: '../managerZone/manage-products'});
};

exports.manageGroups = (req, res) => {
    res.render('managerZone/layout', { content: '../managerZone/manage-groups'});
};

exports.manageUsers = (req, res) => {
    res.render('managerZone/layout', { content: '../managerZone/manage-users'});
};

exports.manageAdmins = (req, res) => {
    res.render('managerZone/layout', { content: '../managerZone/manage-admins'});
};

exports.manageOrders = (req, res) => {
    res.render('managerZone/layout', { content: '../managerZone/manage-orders'});
};