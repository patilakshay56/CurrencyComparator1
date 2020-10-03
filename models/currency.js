const mongoose = require('mongoose');

const CurrencySchema = new mongoose.Schema({
  currencyType: {
    type: String,
    required: true,
  },
});

module.exports = Currency = mongoose.model('currency', CurrencySchema);
