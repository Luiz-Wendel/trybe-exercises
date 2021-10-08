const express = require('express');

const userRouter = express.Router();

const bodyValidator = require('../middlewares/bodyValidator');

const Users = require('../models/Users');

userRouter.post('/', bodyValidator, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const newUser = await Users.create({ firstName, lastName, email, password });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

userRouter.get('/', async (_req, res) => {
  try {
    const users = await Users.getAll();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

userRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Users.getById(id);

    if (!user) return res.status(404).json({ error: true, message: 'User not found!' });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

userRouter.put('/:id', bodyValidator, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const updatedValues = { firstName, lastName, email, password };

  const user = await Users.getById(id);

  if (!user) return res.status(404).json({ error: true, message: 'User not found!' });

  const result = await Users.updateOneById(id, updatedValues);

  return result.modifiedCount
    ? res.status(200).json({ id, ...updatedValues })
    : res.status(400).json({ message: 'No changed values!' });
});

module.exports = userRouter;
