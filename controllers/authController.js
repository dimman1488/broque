exports.login = (req, res, next) => {
    // Render login page
    res.render('managerzone/login', { content: '../managerzone/login' });
}; 