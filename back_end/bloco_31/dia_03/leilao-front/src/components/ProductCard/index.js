import React from 'react';

const ProductCard = ({ name, initialValue }) => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    
  }, []);

  return (
    <section>
      <h1>{name}</h1>
      <p>R$ {value}</p>
      <button type="button" disabled={value >= 100}>
        {value >= 100 ? 'Produto arrematado' : 'Dar um lance'}
      </button>
    </section>
  );
};

export default ProductCard;
