const mongoose = require('mongoose');
const {anyLettersAndNumbersValidator, postalNumberValidator, onlyContainLettersValidator, onlyEnglishLettersValidator} = require('./common/validations');


const AddressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validator: onlyContainLettersValidator
    },  
    streetAddress: {
        type: String,
        required: true,
        validator: anyLettersAndNumbersValidator
    },
    postalCode: {
        type: String,
        required: true,
        validator: postalNumberValidator
    },
    city: {
        type: String,
        required: true,
        validator: onlyContainLettersValidator
    },         
    county: {
        type: String,
        required: true,
        validator: onlyContainLettersValidator
    },                                 
    isDefault: { type: Boolean, default: false }    
});

module.exports = AddressSchema;
