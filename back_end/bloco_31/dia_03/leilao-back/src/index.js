const express = require('express');
const colors = require('colors');

const app = express();

const http = require('http').createServer(app);

const { PORT = 3000 } = process.env;

http.listen(PORT, () => console.log(`Servidor rodando na porta: ${colors.cyan(PORT)}`));
