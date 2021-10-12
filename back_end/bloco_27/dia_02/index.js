const express = require('express');
const colors = require('colors');

const pingRouter = require('./routes/pingRouter');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/ping', pingRouter);

app.listen(PORT, () => {
  console.log(`Running on port ${colors.cyan(PORT)}...`);
});
