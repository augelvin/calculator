let currentValue = '';

/*
const zero = document.querySelector('#n0');
zero.addEventListener('click', () => {
  displayValue += '0';
})

const one = document.querySelector('#n1');
one.addEventListener('click', () => {
  displayValue += '1';
})

const two = document.querySelector('#n2');
two.addEventListener('click', () => {
  displayValue += '2';
})

const three = document.querySelector('#n3');
three.addEventListener('click', () => {
  displayValue += '3';
})

const four = document.querySelector('#n4');
four.addEventListener('click', () => {
  displayValue += '4';
})

const five = document.querySelector('#n5');
five.addEventListener('click', () => {
  displayValue += '5';
})

const six = document.querySelector('#n6');
six.addEventListener('click', () => {
  displayValue += '6';
})

const seven = document.querySelector('#n7');
seven.addEventListener('click', () => {
  displayValue += '7';
})

const eight = document.querySelector('#n8');
eight.addEventListener('click', () => {
  displayValue += '8';
})

const nine = document.querySelector('#n9');
nine.addEventListener('click', () => {
  displayValue += '9';
})

const point = document.querySelector('#n.');
point.addEventListener('click', () => {
  displayValue += '0';
})


const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
  displayValue += '0';
})

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', () => {
  displayValue += '0';
})

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
  displayValue += '0';
})

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
  displayValue += '0';
})
*/


const numbers = document.querySelectorAll('.number');
numbers.forEach((n) => {
  n.addEventListener('click', () => {
    currentValue += n.id.slice(-1); // add last character of ID to concatinate with currentValue
  });
});

const del = document.querySelector('#delete');
del.addEventListener('click', () => {
  currentValue = currentValue.slice(0, -1);
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  currentValue = '';
})

const value = document.querySelector('#value');

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    value.innerHTML = currentValue;
  });
});

let operation;
let a;
let b;

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    operation = operator.id;
    a = Number(currentValue);
    currentValue = '';
    })
  });

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
  b = Number(currentValue);
  currentValue = operate(operation, a, b).toString();
  value.innerHTML = currentValue
})





function add(a, b) {
	return a+b
};

function subtract(a, b) {
	return a-b
};

function multiply(a, b) {
  return a*b
};

function divide(a, b) {
  return a/b
};

function operate(op, a, b) {
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