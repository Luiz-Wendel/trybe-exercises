const express = require('express');

const { DB_SOFTWARE } = process.env;

const Products = require(`../models/${DB_SOFTWARE}/Products`);

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const products = await Products.getAll();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong...' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Products.getById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong...' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, brand } = req.body;

    const newProduct = await Products.add(name, brand);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong...' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Products.exclude(req.params.id);

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong...' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, brand } = req.body;

    const products = await Products.update(req.params.id, name, brand);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong...' });
  }
});

module.exports = router;
