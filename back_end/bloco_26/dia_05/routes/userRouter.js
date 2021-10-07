const express = require('express');
const crypto = require('crypto');

const registerValidation = require('../middlewares/user/registerValidation');
const loginValidation = require('../middlewares/user/loginValidation');

const router = express.Router();

const tokenLength = 12;
const tokenLengthInBytes = tokenLength / 2;

const generateToken = () => crypto.randomBytes(tokenLengthInBytes).toString('hex');

router.post(
  '/register',
  registerValidation,
  (_req, res) => res.status(201).json({ message: 'User created!' }),
);

router.post(
  '/login',
  loginValidation,
  (_req, res) => res.status(200).json({ token: `${generateToken()}` }),
);

module.exports = router;
