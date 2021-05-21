const functions = require('./mathFunctions');

describe('#mathFunctions', () => {
  /*
    Crie uma função que gere um número aleatório entre 0 e 100.
    Você irá criar também os testes para essa função.
    Utilizando o mock, defina o retorno padrão como 10.
    Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
  */
  it('should return 10 when mocked #ex01', () => {
    mockedRandomInt = jest.spyOn(functions, 'getRandomNumberBetween')
      .mockReturnValue(10);

    functions.getRandomNumberBetween();
    expect(mockedRandomInt).toHaveBeenCalled();
    expect(functions.getRandomNumberBetween()).toBe(10);
    expect(mockedRandomInt).toHaveBeenCalledTimes(2);
    mockedRandomInt.mockRestore();
  });
});
