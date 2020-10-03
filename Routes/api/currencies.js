const express = require('express');
const router = express.Router();
const Currency = require('../../models/currency');
const axios = require('axios');

//@route  GET api/currencies
//@desc   Gets all the currencies from DB
//@access Public
router.get('/', async (req, res) => {
  try {
    let currencies = await Currency.find();
    if (!currencies) {
      return res
        .status(404)
        .json({ message: 'no entries found foe the currencies' });
    }
    return res.json(currencies);
  } catch (error) {
    res.json(error.message);
  }
});

//@route  GET api/currencies/specific?currencyType=USD
//@desc   Gets the currencies according to querystring parameter
//@access Public
router.get('/specific', async (req, res) => {
  let currencyType = req.query.currencyType;
  console.log('currencyType : ' + currencyType);
  try {
    let currencies = await axios.get(
      'https://api.exchangeratesapi.io/latest?base=' + currencyType
    );
    if (!currencies) {
      return res
        .status(404)
        .json({ message: 'no data found for the specified currency' });
    }
    return res.send(currencies.data);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
});

module.exports = router;
