import React from 'react';

import socket from '../../utils/socketClient';

const ProductCard = ({ name, initialValue }) => {
  const [value, setValue] = React.useState(initialValue);
  const [arrematador, setArrematador] = React.useState(undefined);

  React.useEffect(() => {
    socket.on('atualizaValor', ({ name: productName, value: productValue, client }) => {
      if (name === productName) {
        setValue(productValue);
        if (productValue >= 100) setArrematador(client ? client : 'Desconhecido');
      }
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
      {
        arrematador && <p>Arrematado por: { arrematador  }</p>
      }
    </section>
  );
};

export default ProductCard;
