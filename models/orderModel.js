const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  contact: {
    type: String,
    required: true
  },
  pickup_point: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  service_type: {
    type: String,
    required: true
  },
  package: {
      type: String,
      required: true,
  },
  completed:{
    type: Boolean,
    required: true,
  }
}, {
  timestamps: true // add timestamps for createdAt and updatedAt
});

module.exports = mongoose.model('Order', orderSchema);
