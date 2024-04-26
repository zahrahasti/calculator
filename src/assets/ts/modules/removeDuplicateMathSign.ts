
import {delLastCharacter} from "@modules/delLastCharacter"
import { DomElements } from "@ts/domEl";
let {btnSigns}=DomElements
export function removeDuplicateMathSign(calculationComponents:string) {
const consecutiveMathSigns = /(\d[+\-*/]{2,})/.test(calculationComponents);
let repeatDel = 0;
if (consecutiveMathSigns) {
  btnSigns.forEach((btn) => {
    btn.classList.add("no-allow");
    repeatDel++;
    if (repeatDel === 1) delLastCharacter();
  });
} else {
   
    btnSigns.forEach((btn) => btn.classList.remove("no-allow"));
}
}

