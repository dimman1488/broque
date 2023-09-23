exports.dashboard = (req, res) => {
    // Render the main dashboard page
    res.render('managerzone/layout', { content: '../managerzone/dashboard' });
}; 

// exports.dashboard = (req, res) => {
//     // Render the main dashboard page
//     res.render('managerzone/dashboard');
// };


exports.manageCategories = (req, res) => {
    // Render the manage products page
    res.render('managerzone/layout', { content: '../managerzone/manage-categories'});
};

exports.manageProducts = (req, res) => {
    // Render the manage products page
    res.render('managerzone/layout', { content: '../managerzone/manage-products'});
};

exports.manageGroups = (req, res) => {
    // Render the manage groups page
    res.render('managerzone/layout', { content: '../managerzone/manage-groups'});
};

exports.manageUsers = (req, res) => {
    // Render the manage users page
    res.render('managerzone/layout', { content: '../managerzone/manage-users'});
};

exports.manageAdmins = (req, res) => {
    // Render the manage admins page
    res.render('managerzone/layout', { content: '../managerzone/manage-admins'});
};

exports.manageOrders = (req, res) => {
    // Render the manage orders page
    res.render('managerzone/layout', { content: '../managerzone/manage-orders'});
};