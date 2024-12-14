const sumAll = function (a, b) {
  // Check if either number is not a number, negative, or not an integer
  if (
    isNaN(a) ||
    isNaN(b) ||
    a < 0 ||
    b < 0 ||
    !Number.isInteger(a) ||
    !Number.isInteger(b)
  ) {
    return "ERROR"; // Return "ERROR" if any of the conditions are true
  }

  // Swap a and b if a is greater than b to ensure the range is correct
  if (a > b) {
    [a, b] = [b, a];
  }

  let sum = 0;

  // Loop through the numbers from a to b (inclusive) and sum them
  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum; // Return the final sum
};

// Do not edit below this line
module.exports = sumAll;
