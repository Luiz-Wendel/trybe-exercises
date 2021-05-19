const searchEmployee = require('./bonus');

describe('Test searchEmployee function', () => {
  it('should be defined', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('should return "ID não identificada" if invalid id is passed', () => {
    expect(searchEmployee('xablau')).toBe('ID não identificada');
  });

  it('should return "Informação indisponível" if invalid detail is passed', () => {
    expect(searchEmployee('4678-2', 'xablau')).toBe('Informação indisponível');
  });

  it('should return employee last name if valid id and detail are passed', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
  });

  it('should return employee first name if valid id and detail are passed', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });

  it('should return employee specialities if valid id and detail are passed', () => {
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  });
});
