const leapYears = function (year) {
  // If the year is divisible by 4
  if (year % 4 === 0) {
    // If the year is divisible by 100, it should also be divisible by 400
    if (year % 100 === 0) {
      // If divisible by 400, it's a leap year
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      // If not divisible by 100, it's a leap year
      return true;
    }
  } else {
    // If not divisible by 4, it's not a leap year
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
