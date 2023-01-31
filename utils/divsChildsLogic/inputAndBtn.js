import { inputAndBtnValidityStyles } from './inputAndBtnValidityStyles.js'
import { buttonWillWork } from './button.js'


// This function is called only if the div has an input element, validates every input based on what it requires and calles the validateStyles and the buttonWillWork function
function inputAndBtnLogic(container, button, arrayOfDivs, index) {
  // If the displayed div has an input element its button is disabled temporally
  button.classList.add("disabled");
  let thisInput = container.querySelector(".input");
  if (thisInput.getAttribute("id") === "nameInput") {
    thisInput.addEventListener("input", () => {
      if (/^[a-z][a-z]+$/.test(thisInput.value.toLowerCase())) {
        inputAndBtnValidityStyles(thisInput, button, true)
      } else {
        inputAndBtnValidityStyles(thisInput, button, false)
      }
    });
    thisInput.addEventListener("change", () => {
      if (/^[a-z][a-z]+$/.test(thisInput.value.toLowerCase())) {
        buttonWillWork(button, arrayOfDivs, index)
      } else {
        buttonWillWork(button, arrayOfDivs, index, false)
      }
    })
  } else if (thisInput.getAttribute("id") === "emailInput") {
    thisInput.addEventListener("input", () => {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,4}$/.test(thisInput.value)) {
        inputAndBtnValidityStyles(thisInput, button, true)
      } else {
        inputAndBtnValidityStyles(thisInput, button, false)
      }
    });
    thisInput.addEventListener("change", () => {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,4}$/.test(thisInput.value)) {
        buttonWillWork(button, arrayOfDivs, index)
      } else {
        buttonWillWork(button, arrayOfDivs, index, false)
      }
    })
  } else {
    thisInput.addEventListener("input", () => {
      // thisInput should have any value but empty for the button to work
      if (thisInput.value) {
        inputAndBtnValidityStyles(thisInput, button, true);
        buttonWillWork(button, arrayOfDivs, index);
      } else {
        inputAndBtnValidityStyles(thisInput, button, false);
        button.removeEventListener("click", () =>
          displayNextDiv(arrayOfDivs, index)
        );
      }
    });
  }
}

export { inputAndBtnLogic };