const express = require('express');

const cepController = require('../controllers/cepController');

const cepParam = require('../middlewares/validators/cepParam');

const cepRouter = express.Router();

cepRouter.get('/:cep', cepParam, cepController.get);

module.exports = cepRouter;
