const { expect } = require("chai");

const { numberType, writeToFile } = require('./exercise');

const positive = 'positive';
const negative = 'negative';
const xablau = 'xablau';
const stringParameter = 'Parameters must be strings!';

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
    expect(() => numberType(xablau)).to.throw();
  });

  it('should throw a message if parameter is not a number', () => {
    expect(() => numberType(xablau)).to.throw(Error, 'Parameter must be a number!');
  });
});

describe('writeToFile function', () => {
  it('should be a function', () => {
    expect(writeToFile).to.be.instanceOf(Function);
  });

  it('should return an error if a parameter is missing', () => {
    expect(() => writeToFile(xablau)).to.throw();
    expect(() => writeToFile()).to.throw();
  });

  it('should return an error if a parameter is not a string', () => {
    expect(() => writeToFile(xablau, true)).to.throw();
    expect(() => writeToFile(45, xablau)).to.throw();
  });

  it('should throw a message if invalid parameters are passed', () => {
    expect(() => writeToFile(xablau)).to.throw(Error, stringParameter);
    expect(() => writeToFile()).to.throw(Error, stringParameter);
    expect(() => writeToFile(xablau, true)).to.throw(Error, stringParameter);
    expect(() => writeToFile(45, xablau)).to.throw(Error, stringParameter);
  });

  it('should write content to file', () => {
    expect(writeToFile('temp.js', xablau)).to.be.equal('ok');
  });
});
