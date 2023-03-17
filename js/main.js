




























// function add(a,b){
//   let c = a+b
//     return c
// }
//  console.log(add(1,4))
// function subtract(a,b){
//     let c = a-b
//     return c
// }
// subtract(2,4)
// function multiply(a,b){
//     let c = a*b
//     return c
// }
// console.log(multiply(2,4))
// function divide(a,b){
//     let c = a/b
//     return c
// }
// console.log(divide(2,4))
 
// function operate(opperator,num1,num2){
//     let result
//     if(opperator==="add"){
//         result = add(num1,num2)
//         return result
//     }
//     else if(opperator=="sub"){
//         result = subtract(num1,num2)
//         return result
//     }
//    else if(opperator=="mult"){
//         result = multiply(num1,num2)
//         return result
//    }
//    else if(opperator=="divi"){
//         result = subtract(num1,num2)
//         return result
//    }
//    else{
//     return  null
//    }
// }



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

















































// const display = document.querySelector(".displayer");
// const buttons = document.querySelectorAll("button");

// buttons.forEach((item) => {
//   item.onclick = () => {
//     if (item.id == "clear") {
//       display.innerText = "";
//     } else if (item.id == "backspace") {
//       let string = display.innerText.toString();
//       display.innerText = string.substr(0, string.length - 1);
//     } else if (display.innerText != "" && item.id == "equal") {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText == "" && item.id == "equal") {
//       display.innerText = "Empty!";
//       setTimeout(() => (display.innerText = ""), 2000);
//     } else {
//       display.innerText += item.id;
//     }
//   };
// });


















































































































// console.log("hello world")
// // let keys = document.querySelectorAll('button')
// // console.log(keys)
// // let display = document.querySelector('.displayer')
// // console.log(display)
// // display.appendChild()
// // Initialize variables
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
























// function add(num1, num2) {
// 	return num1 + num2;
// }

// function subtract(num1, num2) {
// 	return num1 - num2;
// }

// function divide(num1, num2) {
// 	return num1 / num2;
// }

// function multiply(num1, num2) {
// 	return num1 * num2;
// }

// function operate(operator, num1, num2) {
// 	if (operator === '+') {
// 		return add(num1, num2);
// 	} else if (operator === '-') {
// 		return subtract(num1, num2);
// 	} else if (operator === '/') {
// 		return divide(num1, num2);
// 	} else if (operator === '*') {
// 		return multiply(num1, num2);
// 	} else {
// 		return console.log('not a number');
// 	}
// }

// let OperationResult = operate(`*`, 5, 3);

// btn1.addEventListener('click', function hola(params) {
// 	console.log(OperationResult);
// });

// displayer.textContent = `a text ${OperationResult}`;
