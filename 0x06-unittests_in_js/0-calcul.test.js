const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('the sum of to int', () => {
    assert.equal(15, calculateNumber(5, 10));
  });
});

describe('calculateNumber', () => {
  it('the sum of int and float', () => {
    assert.equal(12, calculateNumber(1.5, 10));
  });
});
describe('calculateNumber', () => {
  it('the sum of float and 0', () => {
    assert.equal(2, calculateNumber(1.5, 0));
  });
});
describe('calculateNumber', () => {
  it('the sum of float and 0', () => {
    assert.equal(1, calculateNumber(0.5, 0));
  });
});
describe('calculateNumber', () => {
  it('the sum of float and negative number', () => {
    assert.equal(3, calculateNumber(-1, 3.7));
  });
});
describe('calculateNumber', () => {
  it('the sum of two number', () => {
    assert.equal(5, calculateNumber(1.2, 3.7));
  });
});
describe('calculateNumber', () => {
  it('the sum of two negative numbers', () => {
    assert.equal(-5, calculateNumber(-1.5, -3.7));
  });
});
