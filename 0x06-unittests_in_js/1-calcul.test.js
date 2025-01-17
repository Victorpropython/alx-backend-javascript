const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('Should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
    });
    it('should return the sum of rounded numbers with negative values', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 2.6), 1);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), -1);
    });
    it('should return the difference of rounded numbers with negative values', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 2.6), -4);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.6), 0);
      assert.equal(calculateNumber('DIVIDE', 10, 1.0), 10);
      assert.equal(calculateNumber('DIVIDE', 10, 1.3), 10);
      assert.equal(calculateNumber('DIVIDE', 10, 1.7), 5);
      assert.equal(calculateNumber('DIVIDE', 10.3, 2), 5);
      assert.equal(calculateNumber('DIVIDE', 10, 1.2), 10);
      assert.equal(calculateNumber('DIVIDE', 10.3, 1.3), 10);
      assert.equal(calculateNumber('DIVIDE', 10.7, 1.2), 11);
      assert.equal(calculateNumber('DIVIDE', 10.3, 1.8), 5);
      assert.equal(calculateNumber('DIVIDE', 10.6, 1.8), 5.5);

    });
    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.equal(calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
      assert.equal(calculateNumber('DIVIDE', 10.7, 0).toLowerCase(), 'error');
      assert.equal(calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
      assert.equal(calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
    });
    it('should return the division of rounded numbers with negative values', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 2.6), -1);
      assert.equal(calculateNumber('DIVIDE', 10, 1.0), 10);
      assert.equal(calculateNumber('DIVIDE', 10, 1.3), 10);
      assert.equal(calculateNumber('DIVIDE', 10, 1.7), 5);

    });
  });

  describe('Unknown Operation', () => {
    it('should return "Unknown operation" for invalid type', () => {
      assert.strictEqual(calculateNumber('INVALID', 1, 2), 'Unknown operation');
    });
  });
});