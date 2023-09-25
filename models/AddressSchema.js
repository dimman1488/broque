const mongoose = require('mongoose');
const { anyLettersAndNumbersValidator, postalNumberValidator, onlyContainLettersValidator } = require('./common/validations');


const AddressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: onlyContainLettersValidator
    },  
    streetAddress: {
        type: String,
        required: true,
        validate: anyLettersAndNumbersValidator
    },
    postalCode: {
        type: String,
        required: true,
        validate: postalNumberValidator
    },
    city: {
        type: String,
        required: true,
        validate: onlyContainLettersValidator
    },         
    county: {
        type: String,
        required: true,
        validate: onlyContainLettersValidator
    },                                 
    isDefault: { type: Boolean, default: false }    
});

module.exports = AddressSchema;
