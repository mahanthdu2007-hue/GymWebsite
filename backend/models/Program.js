const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // URL or path
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: false }
}, { timestamps: true });

module.exports = mongoose.model('Program', programSchema);
