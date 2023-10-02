// middleware/authMiddleware.js

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/managerauth/login');
}

function isLoggedOut(req, res, next){
    if(!req.isAuthenticated()) return next();
    res.redirect('/');
}

module.exports = { isLoggedIn, isLoggedOut };