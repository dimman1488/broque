// models/Admin.js
const mongoose = require('mongoose');
const {emailValidator, phoneValidator, onlyContainLettersValidator} = require('./common/validations');
const bcrypt = require('bcryptjs');

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

// Hashing the password before saving it to the database
adminSchema.pre('save', async function(next) {
    const admin = this;
    if (admin.isModified('password')) {
        admin.password = await bcrypt.hash(admin.password, 8);
    }
    next();
});

// Add method for password verification
adminSchema.methods.comparePassword = async function(candidatePassword) {
    const admin = this;
    return bcrypt.compare(candidatePassword, admin.password);
};

module.exports = mongoose.model('Admin', adminSchema);
