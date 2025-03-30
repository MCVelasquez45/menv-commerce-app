const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String },
  price: { type: Number },
  description: { type: String },
  image: { type: String }, // store only filename like "jordan4.jpg"
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
