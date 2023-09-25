// Load environment variables from a .env file
require('dotenv').config();

const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const Product = require('./models/Product.js');

// MongoDB event handlers
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open');
});

mongoose.connection.on('error', function (err) {
    console.error('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

before(async function () {
    this.timeout(10000);  // Extend timeout to 10 seconds
    console.log('Connection string:', process.env.MONGO_DB_CONNECTION_STRING);

    try {
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected successfully to server');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;  // This will cause the tests to fail if the connection fails
    }
});

after(async function () {
    this.timeout(10000);  // Set timeout to 10 seconds
    try {
        await mongoose.connection.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Failed to close the connection:', error);
        throw error;  // This will cause the tests to fail if the connection fails
    }
});

describe('Product Model', function() {
    this.timeout(10000);  // Set timeout to 10 seconds for all tests in this describe block

    it('should return error if required fields are empty', function() {
        let product = new Product();
        let validationError = product.validateSync();
        expect(validationError.errors.name).to.exist;
        expect(validationError.errors.price).to.exist;
    });

    // ... Additional tests for other validators and properties
});
