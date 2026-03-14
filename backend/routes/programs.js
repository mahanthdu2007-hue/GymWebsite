const express = require('express');
const router = express.Router();
const Program = require('../models/Program');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
  try {
    const programs = await Program.find({}).populate('trainer', 'name');
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', protect, admin, async (req, res) => {
  try {
    const program = new Program(req.body);
    const createdProgram = await program.save();
    res.status(201).json(createdProgram);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (program) {
      await program.remove();
      res.json({ message: 'Program removed' });
    } else {
      res.status(404).json({ message: 'Program not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
