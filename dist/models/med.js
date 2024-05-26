const mongoose = require('mongoose');

const medSchema = new mongoose.Schema({
  med_id: String,
  med_name: String,
  manufacturer: String,
  price: Number,
  prescription: Boolean
});

module.exports = mongoose.model('Med', medSchema);