import { displayNextDiv } from '../displayDivsLogic/nextDiv.js'


// This function adds the logic to the button, i.e. makes it so that on clicking it the next div is displayed.

function buttonWillWork(button, arrayOfDivs, index) {
  button.addEventListener("click", () =>  displayNextDiv(arrayOfDivs, index), { once: true });
}

export { buttonWillWork }