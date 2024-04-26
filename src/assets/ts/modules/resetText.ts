
import { DomElements } from "@ts/domEl";
let {calculationComponents,showTextResult,textString}=DomElements
function resetText() {
    calculationComponents = [];
    showTextResult.textContent = "";
    textString = "";
  }

export {resetText}