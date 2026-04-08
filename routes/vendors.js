const express = require('express');
const { Vendor } = require('../models');
const router = express.Router();

// List Vendors
router.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.findAll();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create Vendor
router.post('/', async (req, res) => {
  try {
    const vendor = await Vendor.create(req.body);
    res.status(201).json(vendor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
