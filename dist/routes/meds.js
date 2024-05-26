const express = require('express');
const router = express.Router();
const Med = require('../models/med');

// Get all customers
router.get('/', async (req, res) => {
  try {
    const meds = await Med.find();
    res.json(meds);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new med
router.post('/', async (req, res) => {
  const med = new Med({
    med_id: req.body.med_id,
    med_name: req.body.med_name,
    manufacturer: req.body. manufacturer,
    price: req.body.price,
    prescription: req.body.prescription
  });
  try {
    const newMed = await med.save();
    res.status(201).json(newMed);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add other CRUD operations as needed

module.exports = router;
