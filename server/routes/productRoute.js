const express = require('express');
const router = express.Router();

const { 
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct  
} = require('../controllers/productController');

router.get('/', getProducts);
router.post('/create', createProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;
