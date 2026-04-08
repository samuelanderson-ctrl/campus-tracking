const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    const user = await User.create({ username, email, passwordHash, role });
    res.status(201).json({ id: user.id, username: user.username, email: user.email, role: user.role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });
    const isValid = bcrypt.compareSync(password, user.passwordHash);
    if (!isValid) return res.status(401).json({ error: 'Invalid email or password' });
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
