const mongoose = require('mongoose');
const ImageSchema = require('./common/ImageSchema');



const categorySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true,
    maxlength: 100
  },
  description:{ 
    type: String, 
    default: "",
    trim: true,
    maxlength: 500 
  },
  image: ImageSchema, 
  thumbnailImage: ImageSchema,
  iconImage: ImageSchema,
  excludedFromFreeDelivery: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true }
  //parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' } // For subcategories
}, {
  timestamps: true
});

categorySchema.index({ name: 1 });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;