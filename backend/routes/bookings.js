const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', protect, admin, async (req, res) => {
  try {
    const bookings = await Booking.find({}).populate('trainer', 'name');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
