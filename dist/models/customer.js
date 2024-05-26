const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  cust_id: String,
  cust_name: String,
  email: String,
  password: String
});

module.exports = mongoose.model('Customer', customerSchema);