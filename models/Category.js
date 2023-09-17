const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: "" },
  image: String,
  excludedFromFreeDelivery: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' } // For subcategories
}, {
  timestamps: true
});

categorySchema.index({ name: 1 });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;