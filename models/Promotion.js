const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  promoName: { type: String, required: true, unique: true },
  promoType: {
    type: String,
    enum: ['discount', 'bogof', 'promo_code', 'limited_time', 'free_delivery'],
    required: true
  },
  promoValue: {
    type: Number,
    validate: {
      validator: function(value) {
        return value > 0;
      },
      message: 'Promotion value should be a positive number.'
    }
  },
  free_delivery_threshold: {
    type: Number,
    validate: {
      validator: function(value) {
        return value >= 0;
      },
      message: 'Free delivery threshold should be a non-negative number.'
    }
  },
  applicableProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  applicableCategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  promoCode: String, // If promoType is promo_code, then this is required
  startTime: Date,   // For limited time promotions
  endTime: Date      // For limited time promotions
}, {
  timestamps: true
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;
