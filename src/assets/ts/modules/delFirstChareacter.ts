
import { DomElements } from "@ts/domEl";
let {showTextResult,calculationComponents,textString}=DomElements;
function delFirstChareacter(){
   if(showTextResult.textContent)
    showTextResult.textContent = showTextResult.textContent.slice(0,-3);
    calculationComponents.pop();
    textString = textString.slice(0,-3);
  }
export {delFirstChareacter}