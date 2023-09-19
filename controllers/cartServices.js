const mongoose = require('mongoose');
const CartModel = require('./path-to-your-cart-model');  // Update the path accordingly

function getCartWithProductPrices(cartId, callback) {
  if (!mongoose.Types.ObjectId.isValid(cartId)) {
    return callback(new Error('Invalid cart ID.'));
  }

  CartModel.findById(cartId)
    .populate('products.product', 'price')  // Only fetch 'price' field of the product
    .exec((err, cart) => {
      if (err) {
        return callback(err);
      }
      if (!cart) {
        return callback(new Error('Cart not found.'));
      }

      // If you want to also see the calculated total based on price and quantity:
      let total = 0;
      for(let item of cart.products) {
        total += item.product.price * item.quantity;
      }
      cart.totalAmount = total;
      
      callback(null, cart);
    });
}

// The out-commented section is just a usage example:
// getCartWithProductPrices('someCartId', (err, cart) => {
//   if (err) {
//     console.error('Error fetching cart:', err);
//   } else {
//     console.log('Fetched cart with total amount:', cart);
//   }
// });