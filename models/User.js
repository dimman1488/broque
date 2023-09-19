const mongoose = require('mongoose');
const AddressSchema = require('./Address');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Var god och fyll i en giltig mailadress']
    },
    phone: {
        type: String,
        required: true,
        match: [/\(?\d{1,4}\)?-?\d{5,8}/, 'Ogiltigt telefonnummer!']
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
        match: [/^[a-zA-Z0-9]+$/, 'Användarnamn kan endast innehålla alfanumeriska tecken.']
    },
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        match: [/^[a-zA-Z]+$/, 'Förnamn kan endast innehålla bokstäver.']
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        match: [/^[a-zA-Z]+$/, 'Efternamn kan endast innehålla bokstäver.']
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
