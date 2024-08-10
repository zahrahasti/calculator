import { DomElements } from "@ts/domEl";
import { checkAndRemoveNoAllowClass } from '@modules/checkAndRemoveNoAllowClass';
 import {checkAndAddNoAllowClass} from "@modules/checkAndAddNoAllowClass";
let {calOutput}=DomElements;
 
function delLastCharacter(coutput:string|null) { 
    if(coutput!==null){
    const lastCharacter= coutput.slice(-1)
    calOutput.textContent =coutput.slice(0, -1);
     
    checkAndAddNoAllowClass(coutput)
    checkAndRemoveNoAllowClass(lastCharacter)
   }
   
 }

 export {delLastCharacter,checkAndAddNoAllowClass };