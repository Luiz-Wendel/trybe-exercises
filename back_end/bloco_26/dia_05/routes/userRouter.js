const express = require('express');
const router = express.Router();

const usernameValidation = require('../middlewares/usernameValidation');
const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');

router.post(
  '/register',
  usernameValidation,
  emailValidation,
  passwordValidation,
  (_req, res) => res.status(201).json({ message: 'User created!' }),
);

module.exports = router;
