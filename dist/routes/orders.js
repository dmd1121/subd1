const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Get all customers
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new med
router.post('/', async (req, res) => {
  const order = new Order({
    med_id: req.body.med_id,
    cust_id: req.body.cust_id,
    date: req.body.date
  });
  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add other CRUD operations as needed

module.exports = router;
