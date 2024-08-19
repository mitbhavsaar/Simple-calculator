// let display = document.getElementById('display');
// let currentNumber = '';
// let previousNumber = '';
// let operator = '';

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('button').forEach(button => {
//         button.addEventListener('click', handleButtonPress);
//     });
// });

// function handleButtonPress(event) {
//     let buttonId = event.target.id;
//     switch (buttonId) {
//         case 'clear':
//             clearDisplay();
//             break;
//         case 'plus-minus':
//             toggleSign();
//             break;
//         case 'percent':
//             calculatePercentage();
//             break;
//         case 'divide':
//         case 'multiply':
//         case 'subtract':
//         case 'add':
//             handleOperator(buttonId);
//             break;
//         case 'equals':
//             calculateResult();
//             break;
//         default:
//             handleNumber(buttonId);
//     }
// }

// function clearDisplay() {
//     display.value = '';
//     currentNumber = '';
//     previousNumber = '';
//     operator = '';
// }

// function toggleSign() {
//     if (currentNumber !== '') {
//         currentNumber = parseFloat(currentNumber) * -1;
//         display.value = currentNumber;
//     }
// }

// function calculatePercentage() {
//     if (currentNumber !== '') {
//         currentNumber = parseFloat(currentNumber) / 100;
//         display.value = currentNumber;
//     }
// }

// function handleOperator(buttonId) {
//     if (currentNumber !== '') {
//         previousNumber = currentNumber;
//         currentNumber = '';
//         operator = buttonId;
//         display.value = previousNumber + ' ' + getOperatorSymbol(buttonId);
//     }
// }

// function handleNumber(buttonId) {
//     if (buttonId === '00') {
//         currentNumber += '0';
//     } else {
//         currentNumber += buttonId;
//     }
//     display.value = currentNumber;
// }

// function calculateResult() {
//     if (previousNumber !== '' && operator !== '') {
//         let result = 0;
//         switch (operator) {
//             case 'divide':
//                 if (parseFloat(currentNumber) !== 0) {
//                     result = parseFloat(previousNumber) / parseFloat(currentNumber);
//                 } else {
//                     display.value = 'Error: Division by zero';
//                     return;
//                 }
//                 break;
//             case 'multiply':
//                 result = parseFloat(previousNumber) * parseFloat(currentNumber);
//                 break;
//             case 'subtract':
//                 result = parseFloat(previousNumber) - parseFloat(currentNumber);
//                 break;
//             case 'add':
//                 result = parseFloat(previousNumber) + parseFloat(currentNumber);
//                 break;
//         }
//         display.value = result;
//         currentNumber = result;
//         previousNumber = '';
//         operator = '';
//     }
// }

// function getOperatorSymbol(buttonId) {
//     switch (buttonId) {
//         case 'divide':
//             return '÷';
//         case 'multiply':
//             return '×';
//         case 'subtract':
//             return '-';
//         case 'add':
//             return '+';
//     }
// }


console.log("hello world");