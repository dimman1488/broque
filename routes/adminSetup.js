// routes/adminSetup.js
const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin'); 
const bcrypt = require('bcrypt');

router.get('/', async (req, res, next) => {
    const exists = await Admin.exists({ username: "admin@firedev.se" });
    if(exists) {
        res.redirect('/managerauth/login');
        return;
    };
    bcrypt.genSalt(10, function(err, salt) {
        if(err) return next(err);
        bcrypt.hash("pass", salt, function(err, hash) {
            if(err) return next(err);
            const newAdmin = new Admin({
                email: "admin@firedev.se",
                password: hash
            });
            newAdmin.save()
                .then(() => {
                    res.redirect('/managerauth/login');
                })
                .catch(err => {
                    console.error('Error saving new admin', err);
                    // Optionally send an error response or render an error page
                    res.status(500).send('Internal Server Error')
                });
        });
    });
});


module.exports = router;
