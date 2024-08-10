
import {DomElements} from "@ts/domEl";
let {calOutput,operatorButtons}=DomElements
export function addNoAllowedToWriteOperator(){
    operatorButtons.forEach(operator=>{
      if(calOutput.textContent===operator.dataset.value){
           operator.classList.add("no-allow");
       }
     })
  }