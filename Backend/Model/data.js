const mongoose = require('mongoose');
const data = new mongoose.Schema({
  Timestamp: {
    type: 'string',
  },
  ProfitPercentage: {
    type: Number,
  },
});

const Dataset = mongoose.model('Dataset', data);
module.exports = Dataset;
