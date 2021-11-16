const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const middlewares = require('../middlewares');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.get('/api/posts', routes.getPosts);
apiRoutes.get('/api/users/:userId', middlewares.jwtValidator, routes.getUser);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.post('/api/login', routes.login);

app.use(apiRoutes);

app.use(middlewares.errorHandler);

module.exports = app;
