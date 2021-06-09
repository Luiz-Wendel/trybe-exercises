const math = require('./math');

describe('#math', () => {
  describe('#subtrair', () => {
    it('should have been called #ex.01', () => {
      const mathMock = jest.spyOn(math, 'subtrair');
      math.subtrair(2, 1);
      expect(mathMock).toHaveBeenCalled();
      mathMock.mockRestore();
    });

    it('should #ex.05', () => {
      const mathMock = jest.spyOn(math, 'subtrair')
        .mockReturnValue(20);
      expect(math.subtrair()).toBe(20);
      expect(mathMock).toHaveBeenCalledTimes(1);
      mathMock.mockRestore();
      expect(math.subtrair(2, 1)).toBe(1);
    });
  });

  describe('#multiplicar', () => {
    it('should return 10 #ex.02', () => {
      math.multiplicar = jest.fn()
        .mockReturnValue(10);
      expect(math.multiplicar()).toBe(10);
    });
  });

  describe('#somar', () => {
    it('should return the sum #ex.03', () => {
      math.somar = jest.fn()
        .mockImplementation((firstNumber, secondNumber) => firstNumber + secondNumber);
      expect(math.somar(2, 3)).toBe(5);
    });
  });

  describe('#dividir', () => {
    it('should return 2, 5 and 15 in the next calls #ex.04', () => {
      math.dividir = jest.fn()
        .mockReturnValue(15)
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(5);

      
      expect(math.dividir()).toBe(2);
      expect(math.dividir).toHaveBeenCalled();
      expect(math.dividir()).toBe(5);
      expect(math.dividir()).toBe(15);
      expect(math.dividir).toHaveBeenCalledTimes(3);
    });
  });
});
