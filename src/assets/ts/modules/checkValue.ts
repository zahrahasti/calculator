

import {delFirstChareacter} from "@modules/delFirstChareacter"
import { DomElements } from "@ts/domEl";
let {btnSigns,showTextResult,calculationComponents,textString}=DomElements;
let copyTextString=""
import {removeDuplicateMathSign} from "@modules/removeDuplicateMathSign"
function checkValue(e:Event) {
    btnSigns.forEach(sign=>{
    if(showTextResult.textContent===sign.dataset.value){
          sign.classList.add("no-allow");
           delFirstChareacter()     
    }})
   const element=e.target as HTMLElement
  if (!element.classList.contains("no-allow")) {
    const value = element.dataset.value;
     if(showTextResult.textContent!==null)
    showTextResult.textContent += value;
  if(value!==undefined)
    calculationComponents.push(value);
    textString = calculationComponents.join("");
    if(showTextResult.textContent!==null)
    removeDuplicateMathSign(showTextResult.textContent);
  }
  
  return textString;
}

export {checkValue}