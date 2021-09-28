const { expect } = require("chai");

const numberType = require('./exercise');

const positive = 'positive';
const negative = 'negative';

describe('numberType function', () => {
  it('should be a function', () => {
    expect(numberType).to.be.instanceOf(Function);
  });

  it('should return a string', () => {
    expect(numberType(Math.random())).to.be.a('string');
  });

  it('should return "positive" if number is greater than 0', () => {
    expect(numberType(4)).to.be.equal(positive);
    expect(numberType(53)).to.be.equal(positive);
  });

  it('should return "negative" if number is lesser than 0', () => {
    expect(numberType(-3)).to.be.equal(negative);
    expect(numberType(-26)).to.be.equal(negative);
  });

  it('should return "neutral" if number is 0', () => {
    expect(numberType(0)).to.be.equal('neutral');
  });

  it('should throw an Error if parameter is not a number', () => {
    expect(() => numberType('xablau')).to.throw();
  });

  it('should throw an Error if parameter is not a number', () => {
    expect(() => numberType('xablau')).to.throw(Error, 'Parameter must be a number!');
  });
});
