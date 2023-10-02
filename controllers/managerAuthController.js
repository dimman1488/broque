// controllers/managerAuthController.js

const passport = require('../config/passport/adminPassport');


exports.login = (req, res) => {
    const response = {
        error: req.query.error
    };
    res.render('managerzone/loginLayout', { title: 'Manager Login', content: '../managerzone/login', ...response });
};
exports.authenticate = passport.authenticate('local', {
    successRedirect: '/managerzone',
    failureRedirect: '/managerauth/login?error=true'
}), (req, res, next) => {
    console.log(req.user);
    console.log(req.session);
    next();
};

// exports.redirectToManagerzone = (req, res) => {
//     res.redirect('/managerzone');
// }; 

exports.logout = (req, res) => {
    req.logout(err => {
        if (err) {
            console.error("Logout error: ", err);
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    });
};
