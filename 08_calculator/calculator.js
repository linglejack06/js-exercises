const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
};

const multiply = function(a) {
    return a.reduce((total, current) => total * current);
};

const power = function(num, exponent) {
  let total = num;
	for(i = 0; i < exponent - 1; i++) {
    total *= num;
  }
  return total;
};

const factorial = function(n) {
	if (n === 0) return 1;
  return n * factorial(n-1);
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
