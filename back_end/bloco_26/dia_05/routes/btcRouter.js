const express = require('express');
const axios = require('axios');
const authValidator = require('../middlewares/authValidator');

const router = express.Router();

const COIN_URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

router.get('/price', authValidator, async (_req, res) => {
  const response = await axios.get(COIN_URL);
  const data = response.data;

  return res.status(200).json(data);
});

module.exports = router;
