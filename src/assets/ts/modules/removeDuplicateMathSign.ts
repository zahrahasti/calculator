
import {delLastCharacter} from "@modules/delLastCharacter"
import { DomElements } from "@ts/domEl";
let {operatorButtons}=DomElements
export function removeDuplicateMathSign(calculationComponents:string) {
const consecutiveMathSigns = /(\d[+\-*/]{2,})/.test(calculationComponents);
let repeatDel = 0;
if (consecutiveMathSigns) {
  operatorButtons.forEach((btn) => {
    btn.classList.add("no-allow");
    repeatDel++;
    if (repeatDel === 1) delLastCharacter();
  });
} else {
   
  operatorButtons.forEach((btn) => btn.classList.remove("no-allow"));
}
}

