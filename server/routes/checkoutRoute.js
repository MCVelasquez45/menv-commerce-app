const express = require('express');
const router = express.Router();
const { createCheckout, getAllCheckouts } = require('../controllers/checkoutController');

router.post('/', createCheckout);
router.get('/', getAllCheckouts);

module.exports = router;
