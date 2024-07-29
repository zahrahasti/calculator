
import {removeLeadingZeros} from "@modules/removeLeadingZeros";
import {errorText} from "@modules/errorText";
import { DomElements } from "@ts/domEl";
let {showTextResult,calculationComponents,btnEqual,keyPads,btnReset,btnDeleLastNum}=DomElements
function calculate(txt:string) {
   
    if(eval(removeLeadingZeros(`${txt}`))===Infinity){
      errorText("Can`t divide by zero");
      return;
    }
    
    //@ts-ignore
    if (isNaN(+txt.at(-1))) errorText("Invalid format used")
     else {
      showTextResult.textContent = `${eval(removeLeadingZeros(`${txt}`))}`;
      txt = showTextResult.textContent;
      // calculationComponents = [];
      // calculationComponents.push(txt);
    }
  }
   export {calculate}
   
    
 
    import {delLastCharacter} from "@modules/delLastCharacter";
     import {checkValue} from "@modules/checkValue";
     import {resetText} from "@modules/resetText";
    
    btnReset.addEventListener("click", resetText);
    btnDeleLastNum.addEventListener("click", delLastCharacter);
      keyPads.forEach((key) => {
      key.addEventListener("click",function(e:Event){ 
        checkValue(e)
       }
      );
       
    });
    btnEqual.addEventListener("click", () => calculate(showTextResult.textContent||""));