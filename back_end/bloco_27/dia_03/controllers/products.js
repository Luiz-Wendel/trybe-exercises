const express = require('express');
const Products = require('../models/Products');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await Products.getAll();

  res.json(products);
});

router.get('/:id', async (req, res) => {
  const product = await Products.getById(req.params.id);

  res.json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await Products.add(name, brand);

  res.json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await Products.exclude(req.params.id);

  res.json(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await Products.update(req.params.id, name, brand);

  res.json(products);
});

module.exports = router;
