//the functions add, sub, multiply, divide
let firstValue ='';
let secondValue=''
let Operation = '';

function add(num1, num2) {
	return num1+num2;
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

let result;
function operate(opperator,a,b) {
	if (opperator === '+') {
		result = add(a,b);
		return result;
	} else if (opperator === '-') {
		result = subtract(a,b);
		return result;
	} else if (opperator === '*') {
		result = multiply(a,b);
		return result;
	} else if (opperator === '/') {
		result = subtract(a,b);
		return result;
	} else {
		return "Erro:invalid operator";
	}
}
 
function clear(){
	display.innerText = '';
	firstValue=""
	secondValue =""
}
function backspace(){
	let string = display.innerText.toString();
	display.innerText = string.substr(0, string.length - 1);
}




const display = document.querySelector('.displayer');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
	item.onclick = () => {
		if (item.id == 'clear') {
			clear()
		}else if (item.id == 'backspace') {
			backspace()
		}else if (display.innerText == '' && item.id == '=') {
			display.innerText = 'Empty!';
			setTimeout(() => (display.innerText = ''), 2000);
		}else{
			if(item.id>="0" && item.id<="9"){
				display.innerText +=item.id
				firstValue+=item.id

			}
			if(item.id==='+'||item.id==='-'||item.id==='*'){
				let result
					display.innerText+=item.id
					secondValue = firstValue
					firstValue = ''
					if(item.id==="="){
						if(item.id=="+"){
							result =add(firstValue,secondValue)
							display.innerText(result)
						}
						else if(item.id=="-"){
							result =subtract(firstValue,secondValue)
							display.innerText(result)
						}
						else if(item.id=="*"){
							result =multiply(firstValue,secondValue)
							display.innerText(result)
						}
						else if(item.id=="/"){
							result =divide(firstValue,secondValue)
							display.innerText(result)
						}
					}
			}
			
		 }
		 console.log(firstValue,secondValue)
	};
});






//console.log(firstValue,secondValue)




// const buttons = document.querySelectorAll('button')
// console.log(buttons[4].innerHTML)

// buttons.forEach((button)=>{
//     button.addEventListener('click',display(button.innerHTML))

// })
// function display(value){
//     let display = document.querySelector('.displayer')
//     display.innert= value
//     console.log(value)
// }



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
