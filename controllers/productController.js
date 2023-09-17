const Product = require('../models/Product');

exports.getAllProducts = (req, res, next) => {
    Product.find({})
    .then(products => {
        res.render('layout', { content: 'products', products: products });
    })
    .catch(err => {
        next(err);
    });
};

// Later, you can add more methods like getProductById, createProduct, updateProduct, etc.
