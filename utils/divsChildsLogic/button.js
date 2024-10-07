import { displayNextDiv } from '../displayDivsLogic/nextDiv.js'


// This function adds the logic to the button, i.e. makes it so that on clicking it the next div is displayed.

function buttonWillWork(button, arrayOfDivs, index) {
  const listener = (e) => {
    const path = e.composedPath ? e.composedPath() : [e.target];
    
    // Check if the button or the immediate ancestor is disabled
    if (path[0].disabled || (path[1] && path[1].disabled)) {
      return;
    }
    
    // Call displayNextDiv with the current index and array of divs
    displayNextDiv(arrayOfDivs, index);
  }

  // Add event listener to the button, ensuring it only fires once
  button.addEventListener("click", listener, { once: true });
}

export { buttonWillWork }
