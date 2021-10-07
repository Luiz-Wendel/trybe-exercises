const express = require('express');
const colors = require('colors');

const userRouter = require('./routes/userRouter');
const btcRouter = require('./routes/btcRouter');
const postsRouter = require('./routes/postsRouter');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/btc', btcRouter);
app.use('/posts', postsRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Route not found!' }));
app.use(error);

app.listen(3000, () => {
  console.log(`App running on ${ colors.cyan('port 3000')}…`);
});
