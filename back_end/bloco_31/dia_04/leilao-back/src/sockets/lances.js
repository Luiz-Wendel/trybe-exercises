module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('lance', ({ name, value, clientName }) => {
      console.log(`Lance feito no produto: ${ name } pelo cliente: ${clientName ? clientName : 'não informado'}`);

      const newValue = value + 5;
      io.emit('atualizaValor', { name, value: newValue, client: clientName });
    });
  });
};
