require('dotenv').config();

const myMongoose = require('mongoose');
const Product = require('./models/Product');

//Connect to MongoDB
myMongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const mockProducts = [
    {
        name: 'CocaCola',
        price: 100,
        tags: ['Läsk', 'Dryck'],
        description: 'Coca Cola',
        imageURL: '/img/products/fullsize/cocacola_15.jpg',
        thumbnail100x100URL: '/img/products/thumbs/x100x100/cocacola_15.jpg'

    },
    {
        name: 'Pringles Orginal',
        price: 200,
        tags: ['chips', 'snacks'],
        description: 'Once you pop...',
        imageURL: '/img/products/fullsize/pringles_orginal_snacks.jpg',
        thumbnail100x100URL: '/img/products/thumbs/x100x100/pringles_orginal_snacks.jpg'
    }
];

Product.insertMany(mockProducts)
    .then(() => {
        console.log('Mock products aded successfully');
    })
    .catch(err => {
        console.log('Error adding mock products: ', err);
    });