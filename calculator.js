let currentValue = '';

const equationDisplay = document.querySelector('#equation');

const numbers = document.querySelectorAll('.number');
numbers.forEach((n) => {
  n.addEventListener('click', () => {
    currentValue += n.id.slice(-1); // add last character of ID to concatinate with currentValue
    result = '';
  }); 
});

const point = document.querySelector('#point');
point.addEventListener('click', () => {
  if (!currentValue.includes('.')) {  
    currentValue += '.';
  }
  result = '';
})

const del = document.querySelector('#delete');
del.addEventListener('click', () => {
  currentValue = currentValue.slice(0, -1);
  result = '';
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  currentValue = '';
  a = '';
  b = '';
  equationDisplay.innerHTML = ''
  result = '';
})

const value = document.querySelector('#value');

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    value.innerHTML = currentValue;
  });
});

let operation;
let operationSymbol;
let a;
let b;
let result;

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', () => {  
    
    if (!operation) {
      // if no calculation has been done, set a to currentValue, else set a as result
      if (!result) {
        a = Number(currentValue);
      } else {
        a = Number(result);
        result = '';
      }
    }

    operation = operator.id.slice(0, -1);
    operationSymbol = operator.id.slice(-1);

    currentValue = '';
    equationDisplay.innerHTML = a + ' ' + operationSymbol;
    value.innerHTML = currentValue;
    })
  });

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {

  // if no calculation has been done, set  to currentValue
  if (!result) {
    b = Number(currentValue);
  }

  equationDisplay.innerHTML = a + ' ' + operationSymbol + ' ' + b + ' =';

  result = operate(operation, a, b).toFixed(3);

  // while the decimal ends with 0 or . remove last character
  while ((result.includes('.') && result.endsWith('0')) || result.endsWith('.')) {
    result = result.slice(0, -1);
  }


  value.innerHTML = result;
  currentValue = result;
  operation = '';
  operationSymbol = '';
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
  if (b !== 0) {
    return a/b
  } else {
    return 'Cannot divide by 0'
  }
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