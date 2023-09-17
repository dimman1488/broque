const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
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
  tags: [String],
  inventoryCount: { 
   count: { type: Number, default: 0 },
   displayToCustomer: { type: Boolean, default: false }
  },
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }, // Reference to Category model
  excludedFromFreeDelivery: { type: Boolean, default: false },
  imageURL: String,
  thumbnailURL: String,
  weightInGrams: Number,
  volumeInLiters: Number,
  flavor: String
}, {
  timestamps: true
});

productSchema.index({ name: 1, category: 1 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
