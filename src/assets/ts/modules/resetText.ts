
import { DomElements } from "@ts/domEl";
let {calOutput,operatorButtons}=DomElements
 function resetText() {
    calOutput.textContent = "";
    operatorButtons.forEach(operator=>{
      operator.classList.add("no-allow")
    })
  }

export {resetText}