function sumAll(num1, num2) {
  if ((Number.isInteger(num1)) && (Number.isInteger(num2))) {
    if ((num1 < 0)||(num2 < 0)) {
      return "ERROR";
    } else {
      if (num1 > num2) {
        var sum = 0;
        for (let i = num1; i >= num2; i--) {
          sum += i;
        }
        return sum;
      } else if (num1 < num2) {
        var sum = 0;
        for (let i = num1; i <= num2; i++) {
          sum += i;
        }
        return sum;
      }
    }
  } else {
    return "ERROR";
  }
};

sumAll(4, 5);

// Do not edit below this line
module.exports = sumAll;
