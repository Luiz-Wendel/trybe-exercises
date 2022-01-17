const express = require('express');
const colors = require('colors');

const app = express();

const http = require('http').createServer(app);

const { PORT = 3001, FRONT_END_PORT = 3000 } = process.env;

const io = require('socket.io')(http, {
  cors: {
    origin: `http://localhost:${FRONT_END_PORT}`,
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`Novo usuário conectado. ID: ${socket.id}`);
});

require('./sockets/lances')(io);

http.listen(PORT, () => console.log(`Servidor rodando na porta: ${colors.cyan(PORT)}`));
