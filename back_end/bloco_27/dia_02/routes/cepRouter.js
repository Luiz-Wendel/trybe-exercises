const express = require('express');

const cepController = require('../controllers/cepController');

const cepParam = require('../middlewares/validators/cepParam');
const body = require('../middlewares/validators/body');
const cepBody = require('../middlewares/validators/cepBody');

const cepRouter = express.Router();

cepRouter.get('/:cep', cepParam, cepController.get);
cepRouter.post('/', body, cepBody, cepController.post);

module.exports = cepRouter;
