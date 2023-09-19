const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  isActive: { type: Boolean, default: true },
  name: { 
    type: String, 
    required: true,
    maxlength: 100 // just an example length
  },
  price: { 
    type: Number, 
    required: true, 
    validate: {
      validator: function(value) {
        return value > 0;
      },
      message: 'Price should be a positive number.'
    }
  },
  tags: [{
    type: String,
    maxlength: 50 // just an example length
  }],
  inventoryCount: { 
   count: { type: Number, default: 0 },
   displayToCustomer: { type: Boolean, default: false }
  },
  description: {
    type: String,
    maxlength: 500 // again, an example length
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }, // Reference to Category model
  excludedFromFreeDelivery: { type: Boolean, default: false },
  imageURL: String,  // Consider validation for URL
  thumbnail100x100URL: String, // Consider validation for URL
  weightInGrams: {
    type: Number,
    validate: {
      validator: function(value) {
        return value >= 0;
      },
      message: 'Weight should be a non-negative number.'
    }
  },
  volumeInLiters: {
    type: Number,
    validate: {
      validator: function(value) {
        return value >= 0;
      },
      message: 'Volume should be a non-negative number.'
    }
  },
  flavor: {
    type: String,
    maxlength: 50 // example length
  }
}, {
  timestamps: true
});

productSchema.index({ name: 1, category: 1 }, { unique: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
