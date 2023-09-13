const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	return arr.reduce(total, current => (total + current),0)
};

const multiply = function(arr) {
  return arr.reduce(total, current => (total * current),0)
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(n) {
	if (n === 0) return 1;
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
