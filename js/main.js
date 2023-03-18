//the functions add, sub, multiply, divide
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
	return num2 / num1;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function operate(opperator, a, b) {
	if (opperator === '+') {
		return add(a, b);
	} else if (opperator === '-') {
		return subtract(a, b);
	} else if (opperator === '*') {
		return multiply(a, b);
	} else if (opperator === '/') {
		return subtract(a, b);
	} else {
		return 'Error:invalid operator';
	}
}

function clear() {
	display.innerText = '';
	firstValue = '';
	secondValue = '';
}
function backSpace() {
	let contentDisplayed = display.innerText.toString();
	display.innerText = contentDisplayed.substr(0, contentDisplayed.length - 1);
	// secondValue = secondValue.substr(0, secondValue.length - 1);
}

buttons.forEach((item) => {
	item.onclick = () => {
		if (item.id == 'clear') {
			clear();
		} else if (item.id == 'backspace') {
			backSpace();
		} else if (display.innerText == '' && item.id == '=') {
			display.textContent = 'Empty!';
			setTimeout(() => (display.textContent = ''), 2000);
		} else if (item.id === '.') {
			display.textContent += item.id;
		} else {
			if (item.id >= '0' && item.id <= '9') {
				display.textContent += item.id;
				firstValue += item.id;
			}
			if (
				item.id === '+' ||
				item.id === '-' ||
				item.id === '*' ||
				item.id === '/'
				// ||
				// item.id === '='
			) {
				operation = item.id;
				display.innerText += item.id;
				secondValue = firstValue;
				firstValue = '';
			}

			if (item.id === '=') {
				result = operate(operation, Number(firstValue), Number(secondValue));
				display.textContent = result;
				console.log(
					`first value = ${firstValue} ${operation} second value = ${secondValue}`
				);
				console.log(`the result = ${result}`);
				if (secondValue && firstValue && operation) {
					result = secondValue;
				}
			}
		}
	};
});

window.addEventListener('keydown', function keyPressed(e) {
	if (e.defaultPrevented) {
		return;
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

	if (numbers.includes(e.key)) {
		display.textContent += e.key;
	} else if (e.key == 'Backspace') {
		backSpace();
	}
});

// if (action === 'decimal') {
// 	display.textContent = displayedNum + '.'
//   }

// let keys = document.querySelectorAll('button')
// console.log(keys)
// let display = document.querySelector('.displayer')
// console.log(display)
// display.appendChild()
// Initialize variables
// let num1 = '', num2 = '', operator = '';

// // Function to update the screen
// function updateScreen(value) {
//   document.getElementById('.displayer').value = value;
// }

// // Function to clear the screen
// function clearScreen() {
//   num1 = '';
//   num2 = '';
//   operator = '';
//   updateScreen('');
// }

// // Function to handle number button clicks
// function numberPressed(number) {
//   if (operator === '') {
//     num1 += number;
//     updateScreen(num1);
//   }
//   else {
//     num2 += number;
//     updateScreen(num2);
//   }
// }

// // Function to handle operation button clicks
// function operationPressed(op) {
//   operator = op;
// }

// // Function to calculate the results and display them on the screen
// function calculate() {
//   let result;
//   switch (operator) {
//     case '+':
//       result = parseFloat(num1) + parseFloat(num2);
//       break;
//     case '-':
//       result = parseFloat(num1) - parseFloat(num2);
//       break;
//     case '*':
//       result = parseFloat(num1) * parseFloat(num2);
//       break;
//     case '/':
//       if (num2 === '0') {
//         updateScreen('Error');
//         return;
//       }
//       result = parseFloat(num1) / parseFloat(num2);
//       break;
//     default:
//       updateScreen('Error');
//       return;
//   }
//   updateScreen(result);
//   num1 = result.toString();
//   num2 = '';
//   operator = '';
// }

// btn1.addEventListener('click', function hola(params) {
// 	console.log(OperationResult);
// });

// displayer.textContent = `a text ${OperationResult}`;
