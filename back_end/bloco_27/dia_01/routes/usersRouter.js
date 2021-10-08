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

module.exports = userRouter;
