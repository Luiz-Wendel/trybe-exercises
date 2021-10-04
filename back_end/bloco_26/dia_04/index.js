const express = require('express');
const colors = require('colors');

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong' }));

app.post('/hello', (req, res) => {
  const { name } = req.body;

  return res.status(200).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).json({ message: `Hello, ${name}!` });

  return res.status(401).json({ message: 'Unauthorized!' });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  const jsonResponse = { message: `Seu nome é ${name} e você tem ${age} anos de idade` };

  return res.status(200).json(jsonResponse);
});

app.listen(3000, () => {
  console.log(`App running on ${colors.cyan('port 3000')}...`);
});
