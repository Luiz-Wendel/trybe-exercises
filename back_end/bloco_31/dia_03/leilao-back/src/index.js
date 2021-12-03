const express = require('express');
const colors = require('colors');

const app = express();

const http = require('http').createServer(app);

const { PORT = 3001 } = process.env;

const io = require('socket.io')(http, {
  cors: {
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`Novo usuário conectado. ID: ${socket.id}`);
});

http.listen(PORT, () => console.log(`Servidor rodando na porta: ${colors.cyan(PORT)}`));
