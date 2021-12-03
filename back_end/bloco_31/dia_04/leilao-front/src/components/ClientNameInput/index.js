import React from 'react';

const ClientNameInput = () => {
  const [name, setName] = React.useState('');

  const handleSave = () => {
    localStorage.setItem('clientName', name);
  };

  return (
    <>
      <input
        type="text"
        name="client-name"
        value={name}
        onChange={({target}) => setName(target.value)}
        placeholder="Name"
      />
      <button type="button" onClick={handleSave}>Salvar</button>
    </>
  );
};

export default ClientNameInput;
