require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.post('/login', middlewares.loginValidator, controllers.login);

app.get('/users/me', middlewares.jwtAuth, controllers.me);

app.get('/top-secret', middlewares.jwtAuth, middlewares.isAdmin, controllers.topSecret);

app.post('/signup', middlewares.loginValidator, middlewares.addUser, controllers.signup);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
