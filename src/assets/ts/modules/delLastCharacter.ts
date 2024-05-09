import { DomElements } from "@ts/domEl";

let {showTextResult,calculationComponents}=DomElements;
function delLastCharacter() {
    if(showTextResult.textContent!==null)
    showTextResult.textContent = showTextResult.textContent.slice(0, -1);
   calculationComponents.pop();
 }

 export {delLastCharacter};