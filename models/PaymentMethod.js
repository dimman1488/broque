const paymentMethodSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    methodType: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer'], required: true },
    lastFourDigits: { type: String, minlength: 4, maxlength: 4 },  // For credit cards
    providerName: String,  // e.g., Visa, PayPal, etc.
    isDefault: { type: Boolean, default: false }
  }, {
    timestamps: true
  });
  