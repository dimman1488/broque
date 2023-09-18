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

exports.getProductById = (req, res, next) => {
    const productId = req.params.id;
    Product.findById(productId)
    .then(product => {
        if(!product){
            return res.status(404).send('Product not found');
        }
        res.render('layout', { content: 'product-detail', product: product });
    })
    .catch(err => {
        next(err);
    });
}

// Later, you can add more methods like getProductById, createProduct, updateProduct, etc.
