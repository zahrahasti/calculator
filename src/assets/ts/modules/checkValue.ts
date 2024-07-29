

import {delFirstChareacter} from "@modules/delFirstChareacter"
import { DomElements } from "@ts/domEl";
let {operatorButtons,showTextResult,calculationComponents,textString}=DomElements;
import {removeDuplicateMathSign} from "@modules/removeDuplicateMathSign"
function checkValue(e:Event) {
  operatorButtons.forEach(sign=>{
     if(showTextResult.textContent===sign.dataset.value){
          sign.classList.add("no-allow");
           delFirstChareacter()     
     }})
   const element=e.target as HTMLElement
  if (!element.classList.contains("no-allow")&& showTextResult.textContent!==null) {
    const value = element.dataset.value;
        showTextResult.textContent += value;
      if(showTextResult.textContent.length>=10) showTextResult.style.fontSize="14px"
     if(showTextResult.textContent==="0")showTextResult.textContent=""
   
  if(value!==undefined)

    if(showTextResult.textContent!==null)
    removeDuplicateMathSign(showTextResult.textContent);
  }
  
  return textString;
}

export {checkValue}