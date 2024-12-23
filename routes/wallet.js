const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Get wallet balance
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json({ walletBalance: user.walletBalance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add funds to wallet
router.post('/add', async (req, res) => {
  const { userId, amount } = req.body;
  try {
    const user = await User.findById(userId);
    user.walletBalance += amount;
    await user.save();
    res.json({ message: 'Funds added successfully', walletBalance: user.walletBalance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
