const express = require('express');
const router = express.Router();
const Membership = require('../models/Membership');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
  try {
    const memberships = await Membership.find({});
    res.json(memberships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', protect, admin, async (req, res) => {
  try {
    const membership = new Membership(req.body);
    const createdMembership = await membership.save();
    res.status(201).json(createdMembership);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
