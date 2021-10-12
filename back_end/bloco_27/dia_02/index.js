const express = require('express');
const colors = require('colors');

require('dotenv').config();

const pingRouter = require('./routes/pingRouter');
const cepRouter = require('./routes/cepRouter');

const errorMiddleware = require('./middlewares/error');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/ping', pingRouter);
app.use('/cep', cepRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Running on port ${colors.cyan(PORT)}...`);
});
