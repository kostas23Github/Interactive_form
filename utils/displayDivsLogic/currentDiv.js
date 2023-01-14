// Imports

import { enteringAnimation } from "../animations.js";
import { inputAndBtnLogic } from "../divsChildsLogic/inputAndBtn.js";
import { checkboxAndBtnLogic } from "../divsChildsLogic/checkboxAndBtn.js";
import { buttonWillWork } from "../divsChildsLogic/button.js";
import { hideDivs } from "./hideDivs.js";
import { header } from "../header.js";

// This function displays the current div. Also calls all the appropriate functions based on each specific div. If the div has an input, it calls the input function. Also haldes the header progress bar.


// let index = 0;
// The index isn't initialized anywhere bc its first value is set by the first call of this function, and every subsequent call has that index incremented by another function.
function displayCurrentDiv(arrayOfDivs, index) {
  const currentDiv = arrayOfDivs[index];
  const button = currentDiv.querySelector(".button");
  enteringAnimation(currentDiv);
  if (currentDiv.querySelector(".input")) {
    // This div has an input element.
    inputAndBtnLogic(currentDiv, button, arrayOfDivs, index);
  } else if (currentDiv.querySelector(".checkbox")) {
    // This div has a checkbox element.
    button.classList.add("disabled");
    checkboxAndBtnLogic(button, arrayOfDivs, index);
  } else {
    // This div has only a button.
    button && setTimeout(() => buttonWillWork(button, arrayOfDivs, index), '2000')
    // The button before the function is there bc at the last mainDiv there is no button element therefore button is null, and an error is thrown. In this manner no error is thrown. Also the setTimeout delay is added bc if the user presses the button before the animation is complete both the previous and the current div are displayed. Now the user cannot press the btn before the animation is over therefore, no bug is thrown.
  }
  // After all logic is handled, the previous div is hidden.
  if (index > 0) {
    hideDivs(arrayOfDivs[index - 1])
  }

  header(index)
}

export { displayCurrentDiv };
