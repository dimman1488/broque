const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 }
    }],
    totalAmount: Number,
    status: {
        type: String,
        enum: ['placed', 'reviewing', 'pending_approval', 'confirmed', 'payment_processed', 'out_for_delivery', 'delivered', 'cancelled'],
        default: 'placed'
      },
    shippingAddress: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String
    },
    paymentDetails: {
      method: { type: String, enum: ['credit_card', 'paypal', 'cash_on_delivery'] },
      transactionId: String
    },
    appliedPromotions: [{
      promotion: { type: mongoose.Schema.Types.ObjectId, ref: 'Promotion' }
    }],
  }, {
    timestamps: true
  });
  