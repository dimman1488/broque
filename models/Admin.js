// models/Admin.js
const mongoose = require('mongoose');
const {emailValidator, phoneValidator, onlyContainLettersValidator} = require('./common/validations');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: emailValidator
    },
    phone: {
        type: String,
        required: true,
        validate: phoneValidator
    },
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        validate: onlyContainLettersValidator
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        validate: onlyContainLettersValidator
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    isAdmin: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});



module.exports = mongoose.model('Admin', adminSchema);
