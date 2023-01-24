
const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const multiply = function(a, b) {
  return a*b
};

const divide = function(a, b) {
  return a/b
};

const operate = function(op, a, b) {
  if (op=='add') {
    return add(a, b)
  } else if (op=='subtract') {
    return subtract(a, b)
  } else if (op=='multiply') {
    return multiply(a, b)
  } else if (op=='divide') {
    return divide(a, b)
  }
}