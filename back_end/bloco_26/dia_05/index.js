const express = require('express');
const colors = require('colors');

const userRouter = require('./routes/userRouter');
const btcRouter = require('./routes/btcRouter');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/btc', btcRouter);

app.listen(3000, () => {
  console.log(`App running on ${ colors.cyan('port 3000')}…`);
});
