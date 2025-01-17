/**
 * function to calculate the sum of two numbers
 * @param{type , a , b} being the argument and rounding it up as a sum
 */
function calculateNumber(type, a, b) {
  a = Math.round(a);
  b = Math.round(b);

  switch (type) {
    case 'SUM':
      return a + b;
    case 'SUBTRACT':
      return a - b;
    case 'DIVIDE':
      if (b === 0) {
        return 'Error';
      }
      return Math.round(a / b);
    default:
      return 'Unknown operation';
  }

}

module.exports = calculateNumber