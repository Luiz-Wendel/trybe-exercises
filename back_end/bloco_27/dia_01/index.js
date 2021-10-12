const express = require('express');
const colors = require('colors');
require('dotenv').config();

const usersRouter = require('./routes/usersRouter');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${colors.cyan(PORT)}...`);
});
