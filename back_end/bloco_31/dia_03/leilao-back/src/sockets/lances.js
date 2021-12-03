module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('lance', ({ name, value }) => {
      console.log(`Lance feito no produto: ${ name }`);

      const newValue = value + 5;
      io.emit('atualizaValor', { name, value: newValue });
    });
  });
};
