import { displayNextDiv } from '../displayDivsLogic/nextDiv.js'


// This function adds the logic to the button, i.e. makes it so that on clicking it the next div is displayed.

function buttonWillWork(button, arrayOfDivs, index) {
  const listener = (e) => {
    if (e.path[1].disabled || e.path[0].disabled) {
      return
    }
    return displayNextDiv(arrayOfDivs, index)
  }
    return button.addEventListener("click", listener, { once: true }, false)
}

export { buttonWillWork }