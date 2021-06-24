
// import functions
// import our add function
import { add } from './calculations.js';

// reference needed DOM elements
// #first-add-input, #second-add-input, #add-button, #sum-display
const firstAddInput = document.getElementById('first-add-input');
const secondAddInput = document.getElementById('second-add-input');
const addButton = document.getElementById('add-button');
const sumDisplay = document.getElementById('sum-display');

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