let firstValue = '';
let secondValue = '';
let operation = '';
let result = 0;

const display = document.querySelector('.displayer');
const buttons = document.querySelectorAll('button');

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function divide(num1, num2) {
	if (num2 === "0") {
		 return 'error: infinity'
	}else {
		return num1 / num2;
	}
}

function multiply(num1, num2) {
	return num1 * num2;
}

function operate(operator, a, b) {
	if (operator === '+') {
		return add(a, b);
	} else if (operator === '-') {
		return subtract(a, b);
	} else if (operator === '*') {
		return multiply(a, b);
	} else if (operator === '/') {
		return divide(a, b);
	}else {
		return 'Error: invalid operator';
	}
}

function clear() {
	display.innerText = '';
	firstValue = '';
	secondValue = '';
	result = 0 ;
}

function backSpace() {
	let contentDisplayed = display.innerText.toString();
	display.innerText = contentDisplayed.substr(0, contentDisplayed.length - 1);
	firstValue = firstValue.substr(0, firstValue.length - 1);
}

function calculate() {
	if (secondValue && firstValue && operation) {
		result = operate(operation, Number(secondValue), Number(firstValue));
		//The number/0 correction
		if (result==Infinity){
			display.textContent= result
			setTimeout(() => (display.textContent = ''), 300);
			firstValue='';
			secondValue='';
			operation='';
		} else{

		display.textContent =
			Math.round((result + Number.EPSILON) * 100000) / 100000;
		firstValue = result.toString();
		secondValue = '';
		operation = '';
		}
	}
}

function handleInput(input) {
	if (input === 'clear') {
		clear();
	} else if (input == 'backspace') {
		backSpace();
	} else if (display.innerText == '' && input === '=') {
		display.textContent = 'Empty!';
		setTimeout(() => (display.textContent = ''), 2000);
	} else {
		if (input >= '0' && input <= '9') {
			// The Zero correction
			if (input=='0'&&(display.textContent ==""||display.textContent =='0')){
				display.textContent='0'
			}
			else{
				if(display.innerText=="0"){
					display.textContent =''
				}
				display.textContent += input;
				firstValue += input;
			}
			
		} else if (
			input === '+' ||
			input === '-' ||
			input === '*' ||
			input === '/'
		) {
			if ((input ==='+'||input ==='-'||input ==='/'||input ==='*') &&display.textContent ==""){
				display.textContent=''
			}
			if (operation !== '' && firstValue !== '') {
				calculate();
			}
			// The Operation correction
			if (operation !== '' && firstValue == '') {
				let disp = display.innerText.slice(0, display.innerText.length - 1);
				operation = input;
				display.innerText = disp + input;
			} else {
				operation = input;
				display.innerText += input;
				secondValue = firstValue;
				firstValue = '';
			}
		} else if (input === '=') {
			calculate();
		} else if (input === '.') {
			// the dot correction
			if (input=='.'&&(display.textContent ==""||display.textContent =='.')){
				display.textContent=''
			}else if (!firstValue.includes('.')) {
				display.textContent += input;
				firstValue += input;
			}
		}
	}
}

const numbers = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'+',
	'-',
	'.',
	'/',
	'*',
];

buttons.forEach((item) => {
	item.onclick = () => {
		handleInput(item.id);
	};
});

window.addEventListener('keydown', function keyPressed(e) {
	if (e.defaultPrevented) {
		return;
	}

	const input = e.key;

	if (e.key == 'Backspace') {
		backSpace();
	} else if (numbers.includes(input)) {
		handleInput(input);
	}
});
