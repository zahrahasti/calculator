
import {delLastCharacter} from "@modules/delLastCharacter"
 import {removeNoAllowClass} from "@modules/removeNoAllowClass";
import { addNoAllowClass } from "./addNoAllowClass";

import { DomElements } from "@ts/domEl";
const {calOutput}=DomElements
function checkForRepeation(repeatDel:number){
  repeatDel++;
  if (repeatDel === 1) delLastCharacter(calOutput.textContent);
}
export function removeDuplicateMathSign(calculationComponents:string) {
const consecutiveMathSigns = /(\d[+\-*/]{2,})/.test(calculationComponents);
let repeatDel = 0;
if (consecutiveMathSigns) {
  addNoAllowClass(checkForRepeation,repeatDel)
} else {
  removeNoAllowClass()
}
}

