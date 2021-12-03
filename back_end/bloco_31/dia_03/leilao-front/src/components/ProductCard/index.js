import React from 'react';

import socket from '../../utils/socketClient';

const ProductCard = ({ name, initialValue }) => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    
  }, []);

  const handleBet = () => {
    socket.emit('lance', { name, value });
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
