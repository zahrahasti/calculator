import { DomElements } from "@ts/domEl";
let {calOutput}=DomElements;
import {removeDuplicateMathSign} from "@modules/removeDuplicateMathSign";
import { addNoAllowedToWriteOperator } from "./addNoAllowedToWriteOperator";

function checkValue(e:Event) {
   if(calOutput.textContent===""){
     addNoAllowedToWriteOperator()
    }
  addNoAllowedToWriteOperator()
   const element=e.target as HTMLElement
  if (!element.classList.contains("no-allow")&& calOutput.textContent!==null) {
    const value = element.dataset.value;
    calOutput.textContent += value;
      if(calOutput.textContent.length>=10) calOutput.style.fontSize="14px"
      if(calOutput.textContent==="0")calOutput.textContent=""
     
   
  if(value!==undefined)

    if(calOutput.textContent!==null)
    removeDuplicateMathSign(calOutput.textContent);
  }
  
}

export {checkValue}