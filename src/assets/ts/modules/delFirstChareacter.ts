
import { DomElements } from "@ts/domEl";
let {showTextResult,calculationComponents}=DomElements;
function delFirstChareacter(){
   if(showTextResult.textContent)
    showTextResult.textContent = showTextResult.textContent.slice(0,-3);
    calculationComponents.pop();
  }
export {delFirstChareacter}