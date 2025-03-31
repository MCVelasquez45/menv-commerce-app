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


// Adding delete method below

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
      const result = await Product.findByIdAndDelete(id);

      if (!result) {
          return res.status(404).json({ message: 'Product not found' });
      }

      console.log(`Deleted: ${result.name}, ID: ${result.id}`);
      res.status(200).json({ message: `Deleted: ${result.name}, ID: ${result.id}` });
  } catch (err) {
      console.error('Error deleting product:', err);
      res.status(500).json({ message: err.message });
  }
};


module.exports = { getProducts, deleteProduct }
