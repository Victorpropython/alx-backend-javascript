/**
 * function to calculate the sum of two numbers
 * @param{type , a , b} being the argument and rounding it up as a sum
 */
function calculateNumber(type, a, b) {
  switch (type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
  }
}

module.exports = calculateNumber;