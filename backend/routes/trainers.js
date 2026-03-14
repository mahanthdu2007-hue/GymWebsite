const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.find({});
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', protect, admin, async (req, res) => {
  try {
    const trainer = new Trainer(req.body);
    const createdTrainer = await trainer.save();
    res.status(201).json(createdTrainer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
