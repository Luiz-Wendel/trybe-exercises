const express = require('express');
const Products = require('../models/Products');

const router = express.Router();

router.get('/list-products', async (req, res, next) => {
  const products = await Products.getAll();

  res.send(products);
});

router.get('/get-by-id/:id', async (req, res, next) => {
  const product = await Products.getById(req.params.id);

  res.send(product);
});

router.post('/add-user', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await Products.add(name, brand);

  res.send(newProduct);
});

router.post('/delete-user/:id', async (req, res) => {
  const products = await Products.exclude(req.params.id);

  res.send(products);
});

router.post('/update-user/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await Products.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = router;
