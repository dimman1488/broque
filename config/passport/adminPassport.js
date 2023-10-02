
//config/adminPassport.js

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Admin = require('../../models/Admin');

passport.serializeUser(function(admin, done) {
    done(null, admin.id);
});

passport.deserializeUser(async function(id, done) {
    try {
        const admin = await Admin.findById(id);
        done(null, admin);
    } catch (err) {
        done(err);
    }
});

passport.use(new localStrategy(
    { usernameField: 'email' },
    async function(email, password, done) { 
    try {
        const admin = await Admin.findOne({ email: email });
        if (!admin) return done(null, false, { message: 'Incorrect username.' });

        bcrypt.compare(password, admin.password, function(err, res) {
            if (err) return done(err);
            if (res === false) return done(null, false, { message: 'Incorrect password.' });

            return done(null, admin);
        });
    } catch (err) {
        return done(err);
    }
}));

module.exports = passport;