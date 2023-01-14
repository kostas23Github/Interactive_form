// Imports
import { enteringAnimation, leavingAnimation } from "./utils/animations.js";
import { displayCurrentDiv } from "./utils/displayDivsLogic/currentDiv.js";
import { hideDivs } from "./utils/displayDivsLogic/hideDivs.js";

// DOM elements
const mainDivs = document.querySelectorAll(".container");

window.onload = () => displayCurrentDiv(mainDivs, 0);