import React from 'react';

import socket from '../../utils/socketClient';

const ProductCard = ({ name, initialValue }) => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    socket.on('atualizaValor', ({ name: productName, value: productValue }) => {
      if (name === productName) setValue(productValue);
    });
  }, [name]);

  const handleBet = () => {
    const clientName = localStorage.getItem('clientName');

    socket.emit('lance', { name, value, clientName });
  };

  return (
    <section>
      <h1>{name}</h1>
      <p>R$ {value}</p>
      <button type="button" onClick={handleBet} disabled={value >= 100}>
        {value >= 100 ? 'Produto arrematado' : 'Dar um lance'}
      </button>
    </section>
  );
};

export default ProductCard;
