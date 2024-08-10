 
import { DomElements } from "@ts/domEl.ts";
const {operatorButtons}=DomElements
function removeNoAllowClass(){
  operatorButtons.forEach((operator) => operator.classList.remove("no-allow"));
  }
  
export {removeNoAllowClass}