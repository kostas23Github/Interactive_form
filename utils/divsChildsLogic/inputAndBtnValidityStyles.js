// This function styles the input elements based on if their content is valid or not.

function inputAndBtnValidityStyles(input, button, isValid) {
  if (isValid) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    button.classList.remove("disabled");
    button.disabled = false
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    button.classList.add("disabled");
    button.disabled = true
  }
}

export { inputAndBtnValidityStyles };