const functions = require('./mathFunctions');

describe('#mathFunctions', () => {
  /*
    Crie uma função que gere um número aleatório entre 0 e 100.
    Você irá criar também os testes para essa função.
    Utilizando o mock, defina o retorno padrão como 10.
    Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
  */
  describe('Testing getRandomNumberBetween function' , () => {
    it('should return 10 when mocked #ex01', () => {
      const mockedRandomInt = jest.spyOn(functions, 'getRandomNumberBetween')
        .mockReturnValue(10);
  
      functions.getRandomNumberBetween();
      expect(mockedRandomInt).toHaveBeenCalled();
      expect(functions.getRandomNumberBetween()).toBe(10);
      expect(mockedRandomInt).toHaveBeenCalledTimes(2);
      mockedRandomInt.mockRestore();
    });
  
    /*
      Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
      que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.
      Essa implementação deve ocorrer uma única vez.
      Faça os testes necessários.
    */
   it('should return number division when mocked it\'s implementation #ex.02', () => {
    const mockedRandomInt = jest.spyOn(functions, 'getRandomNumberBetween')
      .mockImplementation((firstNumber, SecondNumber) => firstNumber / SecondNumber);
  
    expect(functions.getRandomNumberBetween(10, 2)).toBe(5);
    expect(functions.getRandomNumberBetween(9, 3)).toBe(3);
    expect(mockedRandomInt).toHaveBeenCalledTimes(2);
    mockedRandomInt.mockRestore();
   });
  });
});
