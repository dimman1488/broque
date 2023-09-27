

exports.dashboard = (req, res) => {
    // Render the main dashboard page
    res.render('managerzone/layout', { content: '../managerzone/dashboard' });
}; 

exports.manageCategories = (req, res) => {
    res.render('managerzone/layout', { content: '../managerzone/manage-categories'});
};

exports.manageProducts = (req, res) => {
    res.render('managerzone/layout', { content: '../managerzone/manage-products'});
};

exports.manageGroups = (req, res) => {
    res.render('managerzone/layout', { content: '../managerzone/manage-groups'});
};

exports.manageUsers = (req, res) => {
    res.render('managerzone/layout', { content: '../managerzone/manage-users'});
};

exports.manageAdmins = (req, res) => {
    res.render('managerzone/layout', { content: '../managerzone/manage-admins'});
};

exports.manageOrders = (req, res) => {
    res.render('managerzone/layout', { content: '../managerzone/manage-orders'});
};