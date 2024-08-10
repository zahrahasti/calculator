
import {removeLeadingZeros} from "@modules/removeLeadingZeros";
import {errorText} from "@modules/errorText";
import { DomElements } from "@ts/domEl";
let {calOutput,btnEqual,keyPads,btnReset,btnDeleLastNum}=DomElements
export const errorDevideByZero="Can`t divide by zero";
export const invalidFormatError="Invalid format used";
function calculate(txt:string) {
   
    if(eval(removeLeadingZeros(`${txt}`))===Infinity){
      errorText(errorDevideByZero);
      return;
    }
    
    if (txt==="") errorText(invalidFormatError)
     else {
      calOutput.textContent = `${eval(removeLeadingZeros(`${txt}`))}`;

    }
  }
   export {calculate}
   
    
 
    import {delLastCharacter} from "@modules/delLastCharacter";
     import {checkValue} from "@modules/checkValue";
     import {resetText} from "@modules/resetText";
    
    btnReset.addEventListener("click", resetText);
    btnDeleLastNum.addEventListener("click",()=> delLastCharacter(calOutput.textContent));
      keyPads.forEach((key) => {
      key.addEventListener("click",function(e:Event){ 
        checkValue(e)
       }
      );
    });

  btnEqual.addEventListener("click", () => calculate(calOutput.textContent||""));