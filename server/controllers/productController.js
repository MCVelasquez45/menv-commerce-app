const Product = require('../models/productModel');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    console.log('Products fetched:', products.data);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching products.' });
  }
};

module.exports = { getProducts };
