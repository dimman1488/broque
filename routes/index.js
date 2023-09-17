const express = require('express');
const ejs = require('ejs');
const router = express.Router();

router.get('/', (req, res, next) => {
    ejs.renderFile('./views/index.ejs', (err, result) => {
        if (err) {
            return next(err); 
        }
        res.render('layout', {body: result });
    });
});

module.exports = router;
