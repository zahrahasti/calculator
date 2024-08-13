
 
import { DomElements } from "@ts/domEl.ts";
const {operatorButtons}=DomElements
function addNoAllowClass(fn?:Function|never,repeatDel?:number){
  operatorButtons.forEach((btn) =>btn.classList.add("no-allow"));
  if(fn){
    fn(repeatDel)
  } 
}

export {addNoAllowClass};