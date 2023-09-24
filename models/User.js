const mongoose = require('mongoose');
const {emailValidator, phoneValidator, onlyContainLettersValidator, onlyEnglishLettersValidator} = require('./common/validations');
const AddressSchema = require('./Address');

const userSchema = new mongoose.Schema({
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
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
        validate: onlyEnglishLettersValidator
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
        validate: onlyContainLettersValidator
    },
    addresses: [AddressSchema],
    frequentlyBought: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
      purchaseCount: {type: Number, default: 0 }
    }],
  }, {
    timestamps: true
});

userSchema.pre('save', function(next) {
    const user = this;
    const defaultAddresses = user.addresses.filter(address => address.isDefault);
    if (defaultAddresses.length !== 1) {
        next(new Error('Det kan finnas exakt en default-adress.'));
    } else {
        next();
    }
});

module.exports = mongoose.model('User', userSchema);
