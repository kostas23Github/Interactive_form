import { buttonWillWork } from "./button.js";


// This function makes the ckeckboxes behave as radio buttons and calles the button only if one of them is checked.
function checkboxAndBtnLogic(button, arrayOfDivs, index) {
  const checkboxes = document.querySelectorAll(".checkbox");
  const [checkbox1, checkbox2] = checkboxes;
  const input1 = checkbox1.querySelector("input");
  const input2 = checkbox2.querySelector("input");
  input1.addEventListener("change", () => {
    input2.checked = !input1.checked;
    button.classList.remove("disabled");
    buttonWillWork(button, arrayOfDivs, index);
  });
  input2.addEventListener("change", () => {
    input1.checked = !input2.checked;
    button.classList.remove("disabled");
    buttonWillWork(button, arrayOfDivs, index);
  });
}

export { checkboxAndBtnLogic };
