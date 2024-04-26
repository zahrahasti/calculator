import { DomElements } from "@ts/domEl";

let {showTextResult,calculationComponents,textString}=DomElements;
function delLastCharacter() {
    if(showTextResult.textContent!==null)
    showTextResult.textContent = showTextResult.textContent.slice(0, -1);
   calculationComponents.pop();
   if(textString)
   textString = textString.slice(0, -1);
 }

 export {delLastCharacter};