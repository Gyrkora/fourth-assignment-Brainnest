//variables

let btn1 = document.querySelector('.btn1');
let displayer = document.querySelector('.displayer');

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function operate(operator, num1, num2) {
	if (operator === '+') {
		return add(num1, num2);
	} else if (operator === '-') {
		return subtract(num1, num2);
	} else if (operator === '/') {
		return divide(num1, num2);
	} else if (operator === '*') {
		return multiply(num1, num2);
	} else {
		return console.log('not a number');
	}
}

let OperationResult = operate(`*`, 5, 3);

btn1.addEventListener('click', function hola(params) {
	console.log(OperationResult);
});

displayer.textContent = `a text ${OperationResult}`;
