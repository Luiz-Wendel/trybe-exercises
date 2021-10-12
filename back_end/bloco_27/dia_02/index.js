const express = require('express');
const colors = require('colors');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${colors.cyan(PORT)}...`);
});
