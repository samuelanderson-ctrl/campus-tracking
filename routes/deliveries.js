const express = require('express');
const { Delivery } = require('../models');
const router = express.Router();

// List Deliveries
router.get('/', async (req, res) => {
  try {
    const deliveries = await Delivery.findAll();
    res.json(deliveries);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create Delivery
router.post('/', async (req, res) => {
  try {
    const delivery = await Delivery.create(req.body);
    res.status(201).json(delivery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
