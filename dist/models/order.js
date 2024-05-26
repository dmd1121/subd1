const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  med_id: String,
  cust_id: String,
  date: Date
});

module.exports = mongoose.model('Order', orderSchema);