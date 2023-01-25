let displayValue = '';

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
  displayValue += '0';
})

const one = document.querySelector('#one');
one.addEventListener('click', () => {
  displayValue += '1';
})

const two = document.querySelector('#two');
two.addEventListener('click', () => {
  displayValue += '2';
})

const three = document.querySelector('#three');
three.addEventListener('click', () => {
  displayValue += '3';
})

const four = document.querySelector('#four');
four.addEventListener('click', () => {
  displayValue += '4';
})

const five = document.querySelector('#five');
five.addEventListener('click', () => {
  displayValue += '5';
})

const six = document.querySelector('#six');
six.addEventListener('click', () => {
  displayValue += '6';
})

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
  displayValue += '7';
})

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
  displayValue += '8';
})

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
  displayValue += '9';
})
/*
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
const point = document.querySelector('#point');
point.addEventListener('click', () => {
  displayValue += '0';
})

const del = document.querySelector('#delete');
del.addEventListener('click', () => {
  displayValue = displayValue.slice(0, -1);
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  displayValue = '';
})


const value = document.querySelector('#value');

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    value.innerHTML= displayValue;
  });
});






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