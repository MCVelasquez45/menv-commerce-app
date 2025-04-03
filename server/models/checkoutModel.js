const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  creditCard: String,
  cartItems: Array
}, { timestamps: true });

module.exports = mongoose.model('Checkout', checkoutSchema);