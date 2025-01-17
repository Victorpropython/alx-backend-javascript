//import assert from 'node:assert/strict';

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 1.3), 1);
    assert.equal(calculateNumber(0, 1.7), 2);
  });
  it('floating point whole number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(1.7, 0), 2);
  });

  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(0, 1.2), 1);
    assert.equal(calculateNumber(1.3, 1.3), 2);
    assert.equal(calculateNumber(1.7, 1.2), 3);
    assert.equal(calculateNumber(1.3, 1.8), 3);
    assert.equal(calculateNumber(1.6, 1.8), 4);
  });

  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding down a and b floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
})