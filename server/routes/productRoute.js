const express = require('express');
const router = express.Router();
const { getProducts, deleteProduct } = require('../controllers/productController');

router.get('/', getProducts);
router.delete('/:id', deleteProduct)
module.exports = router;
