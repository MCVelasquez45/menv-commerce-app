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

const createProduct = async (req, res) => {
  try {
    const body = req.body
    if (!body) {
      res.status(400).json({ message: 'Error Req Body' })
    }
    const product = await Product.insertOne({ ...body });
    console.log(product)
    res.status(201).json({ message: 'success' })
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching products.' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      res.status(400).json({ message: 'Params Error' }) 
    }
    const body = req.body
    if (!body) {
      res.status(400).json({ message: 'Error Req Body' })
    }
    console.log("Update", id, body)
    const product = await Product.findByIdAndUpdate(id, body);
    console.log('RES', product)
    res.status(201).json({ message: 'success' })
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching products.' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      res.status(400).json({ message: 'Params Error' }) 
    }
    const product = await Product.findByIdAndDelete(id);
    console.log('Products fetched:', product);
    res.status(204).json({ message: 'success' })
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching products.' });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
