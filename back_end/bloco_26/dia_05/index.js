const express = require('express');
const colors = require('colors');

const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.listen(3000, () => {
  console.log(`App running on ${ colors.cyan('port 3000')}…`);
});
