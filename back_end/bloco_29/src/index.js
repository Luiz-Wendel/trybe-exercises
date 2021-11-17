const express = require('express');
const colors = require('colors');
const logger = require('morgan');

const app = express();

app.use(express.json());
app.use(logger('dev'));

app.get('/', (_req, res) => {
  const { NODE_ENV } = process.env;

  return res.status(200).json({ environment: NODE_ENV });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App running on port: ${colors.cyan(PORT)}`));
