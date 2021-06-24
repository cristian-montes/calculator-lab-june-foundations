// import functions
// import our add function
import { add } from './calculations.js';

// reference needed DOM elements
// #first-add-input, #second-add-input, #add-button, #sum-display
const firstAddInput = document.getElementById('first-add-input');
const secondAddInput = document.getElementById('second-add-input');
const addButton = document.getElementById('add-button');
const sumDisplay = document.getElementById('sum-display');
console.log(firstAddInput);
console.log(secondAddInput);
console.log(addButton);
console.log(sumDisplay);

// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

  // add event listener to button click
addButton.addEventListener('click', ()=>{
    console.log(firstAddInput.value);
// get the value #first-add-input -- convert to number
    const addend1 = Number(firstAddInput.value);
// get the value #second-add-input -- convert to number
    const addend2 = Number(secondAddInput.value);
// call add function with firstAddInput & secondAddInput
    const answer = add(addend1, addend2);
// replace the innertext of #sum-display with the result
    console.log(answer);
    sumDisplay.textContent = answer;
});

const firstSubtractInput = document.getElementById('first-subtract-input');
const secondSubtractInput = document.getElementById('second-subtract-input');
const subtractButton = document.getElementById('subtract-button');
const differenceDisplay = document.getElementById('difference-display');
console.log(firstSubtractInput);
console.log(secondSubtractInput);
console.log(subtractButton);
console.log(differenceDisplay);

subtractButton.addEventListener('click', ()=>{
    console.log(firstSubtractInput.value);
});