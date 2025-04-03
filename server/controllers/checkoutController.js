const Checkout = require('../models/checkoutModel');

exports.createCheckout = async (req, res) => {
  try {
    const checkout = new Checkout(req.body);
    await checkout.save();
    res.status(201).json(checkout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCheckouts = async (req, res) => {
  try {
    const checkouts = await Checkout.find();
    res.json(checkouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
