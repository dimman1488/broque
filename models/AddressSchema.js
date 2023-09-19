const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    name: {
        type: String,
        match: [/^[a-zA-Z\s\-]+$/, 'Ogiltigt namnformat.']
    },  
    streetAddress: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9\s\-]+$/, 'Ogiltigt gatuadressformat.']
    },
    postalCode: {
        type: String,
        required: true,
        match: [/^\d{5}$|^\d{2} \d{3}$|^\d{3} \d{2}$/, 'Ogiltigt postnummerformat.']
    },
    city: {
        type: String,
        required: true,
        match: [/^[a-zA-Z\s\-]+$/, 'Ogiltigt stadformat.']
    },         
    county: {
        type: String,
        match: [/^[a-zA-Z\s\-]+$/, 'Ogiltigt länsformat.']
    },                                 
    isDefault: { type: Boolean, default: false }    
});

module.exports = AddressSchema;
