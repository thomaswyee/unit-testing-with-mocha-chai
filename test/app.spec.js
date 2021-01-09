const { expect } = require('chai');
const { luhn } = require('../src/app');

describe('the luhn function', () => {
  it('should return valid if the input number is valid', () => {
    const strNum = '4847352989263094';
    const result = luhn(strNum);
    expect(result).to.be.eq('valid number');
  });

  it('should return invalid if the input number is invalid', () => {
    const strNum = '4847352989263095';
    const result = luhn(strNum);
    expect(result).to.be.eq('invalid number');
  });

  it('should return empty input if there is no input', () => {
    const result = luhn();
    expect(result).to.be.eq('empty input');
  });

  it('should return input are not number if the type of input is not number', () => {
    const result = luhn('fdsafdsa123214231');
    expect(result).to.be.eq('invalid number');
  });
});