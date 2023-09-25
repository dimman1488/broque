const mongoose = require('mongoose');
const ImageSchema = require('./common/ImageSchema');
const {urlValidator, isNonNegative} = require('./common/validations');

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
    validate: isNonNegative
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
  imageURL: ImageSchema, 
  thumbnailImage: ImageSchema,
  iconImage: ImageSchema,
  website: {
    type: String,
    validate: urlValidator
  },  
  weightInGrams: {
    type: Number,
    validate: isNonNegative
  },
  volumeInLiters: {
    type: Number,
    validate: isNonNegative
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
