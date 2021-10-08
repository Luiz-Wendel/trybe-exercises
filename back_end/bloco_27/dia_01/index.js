const express = require('express');
const colors = require('colors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${colors.cyan(PORT)}...`);
});
