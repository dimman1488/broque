const passport = require('./config/passport/adminPassport');


exports.login = (req, res, next) => {
    // Render login page
    res.render('managerzone/loginLayout', { content: '../managerzone/login' });
}; 

exports.authenticate = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?error=true'
});

