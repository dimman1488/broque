const userSchema = new mongoose.Schema({   
    address: {
      name: String,  // Useful for a label like 'Home', 'Work', etc.
      streetAddress: String,  // 'katuosoite' in Finnish
      postalCode: String,     // 'postinumero' 
      city: String,           // 'kaupunki' or 'kunta'
      county: String,         // 'maakunta'
      default: { type: Boolean, default: true } // Default address for the user
    },
    shippingAddresses: [{
      name: String,  // Useful if shipping to someone else or for labeling addresses
      streetAddress: String,
      postalCode: String,
      city: String,
      county: String,
      default: { type: Boolean, default: false }  // Optional: For users who frequently ship to addresses other than their primary
    }],
    frequentlyBought: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
      purchaseCount: {type: Number, default: 0 }
    }],
  }, {
    timestamps: true
  });
  