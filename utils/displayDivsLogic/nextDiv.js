import { displayCurrentDiv } from "./currentDiv.js";

// This function calls the displayCurrentDiv function with the next index to be displayed.

function displayNextDiv(arrayOfDivs, index) {
  index < arrayOfDivs.length - 1 && index++;
  displayCurrentDiv(arrayOfDivs, index);
}

export { displayNextDiv };
