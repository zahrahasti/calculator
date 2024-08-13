
import { DomElements } from "@ts/domEl.ts";
const {operatorButtons}=DomElements
import { removeNoAllowClass } from "../ClassManagement/removeNoAllowClass.ts";
function checkAndRemoveNoAllowClass(lastCharacter:string):boolean|void{
    const operators=["+","-","*","/"];
    if (operators.includes(lastCharacter)) {
     removeNoAllowClass();
       return true;
   }else return false;
  }

export {checkAndRemoveNoAllowClass}