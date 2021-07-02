// import functions
// import our add function
import { add, subtract, multiply, divide, modulo } from './calculations.js';

// reference needed DOM elements
// #first-add-input, #second-add-input, #add-button, #sum-display
const genInput1 = document.getElementById('gen-input1');
const genInput2 = document.getElementById('gen-input2');
const submitBtn = document.getElementById('submit-btn');
const mathSymbol = document.getElementById('math-symbol');
const dropNames = document.getElementById('math-drop-names');
const resultsDisplay = document.getElementById('results-display');

// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

  // add event listener to button click
submitBtn.addEventListener('click', () => {
    if (dropNames.value === 'add') {
        const addend1 = Number(genInput1.value);
        const addend2 = Number(genInput2.value);
        const answer = add(addend1, addend2);
        mathSymbol.textContent = '+';
        resultsDisplay.textContent = answer;
    } else if (dropNames.value === 'subtract') {
        const subtrahend1 = Number(genInput1.value);
        const subtrahend2 = Number(genInput2.value);
        const answer = subtract(subtrahend1, subtrahend2);
        mathSymbol.textContent = '-';
        resultsDisplay.textContent = answer;
    } else if (dropNames.value === 'multiply') {
        const factor1 = Number(genInput1.value);
        const factor2 = Number(genInput2.value);
        const answer = multiply(factor1, factor2);
        mathSymbol.textContent = '*';
        resultsDisplay.textContent = answer;
    } else if (dropNames.value === 'divide') {
        const divisor1 = Number(genInput1.value);
        const divisor2 = Number(genInput2.value);
        const answer = divide(divisor1, divisor2);
        mathSymbol.textContent = '/';
        resultsDisplay.textContent = answer;
    } else if (dropNames.value === 'modulo') {
        const operand1 = Number(genInput1.value);
        const operand2 = Number(genInput2.value);
        const answer = modulo(operand1, operand2);
        mathSymbol.textContent = '%';
        resultsDisplay.textContent = answer;
    }
});









//     console.log(genInput1.value);
// // get the value #first-add-input -- convert to number
   
// // get the value #second-add-input -- convert to number
   
// // call add function with firstAddInput & secondAddInput
    
// // replace the innertext of #sum-display with the result
//     console.log(answer);
//     resultsDisplay.textContent = answer;


// const firstSubtractInput = document.getElementById('first-subtract-input');
// const secondSubtractInput = document.getElementById('second-subtract-input');
// const subtractButton = document.getElementById('subtract-button');
// const differenceDisplay = document.getElementById('difference-display');
// console.log(firstSubtractInput);
// console.log(secondSubtractInput);
// console.log(subtractButton);
// console.log(differenceDisplay);

// subtractButton.addEventListener('click', () => {
//     console.log(firstSubtractInput.value);

//     const subtrahend1 = Number(firstSubtractInput.value);
//     const subtrahend2 = Number(secondSubtractInput.value);
//     const answer = subtract(subtrahend1, subtrahend2);
//     console.log(answer);
//     differenceDisplay.textContent = answer;
// });

// const firstMultiplyInput = document.getElementById('first-multiply-input');
// const secondMultiplyInput = document.getElementById('second-multiply-input');
// const multiplyButton = document.getElementById('multiply-button');
// const productDisplay = document.getElementById('product-display');
// console.log(firstMultiplyInput);
// console.log(secondMultiplyInput);
// console.log(multiplyButton);
// console.log(productDisplay);

// multiplyButton.addEventListener('click', () => {
//     console.log(firstMultiplyInput.value);

//     const factor1 = Number(firstMultiplyInput.value);
//     const factor2 = Number(secondMultiplyInput.value);
//     const answer = multiply(factor1, factor2);
//     console.log(answer);
//     productDisplay.textContent = answer;
// });

// const firstDivideInput = document.getElementById('first-divide-input');
// const secondDivideInput = document.getElementById('second-divide-input');
// const divideButton = document.getElementById('divide-button');
// const quotientDisplay = document.getElementById('quotient-display');
// console.log(firstDivideInput);
// console.log(secondDivideInput);
// console.log(divideButton);
// console.log(quotientDisplay);

// divideButton.addEventListener('click', () => {
//     console.log(firstDivideInput.value);

//     const divisor1 = Number(firstDivideInput.value);
//     const divisor2 = Number(secondDivideInput.value);
//     const answer = divide(divisor1, divisor2);
//     console.log(answer);
//     quotientDisplay.textContent = answer;
// });

// const firstModuloInput = document.getElementById('first-modulo-input');
// const secondModuloInput = document.getElementById('second-modulo-input');
// const moduloButton = document.getElementById('modulo-button');
// const remainderDisplay = document.getElementById('remainder-display');
// console.log(firstModuloInput);
// console.log(secondModuloInput);
// console.log(moduloButton);
// console.log(remainderDisplay);

// moduloButton.addEventListener('click', () => {
//     console.log(firstModuloInput.value);

//     const operand1 = Number(firstModuloInput.value);
//     const operand2 = Number(secondModuloInput.value);
//     const answer = modulo(operand1, operand2);
//     console.log(answer);
//     remainderDisplay.textContent = answer;
// });