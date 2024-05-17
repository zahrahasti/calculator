
import {removeLeadingZeros} from "@modules/removeLeadingZeros";
import {errorText} from "@modules/errorText";
import { DomElements } from "@ts/domEl";
let {showTextResult,calculationComponents}=DomElements
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
      calculationComponents = [];
      calculationComponents.push(txt);
    }
  }
   export {calculate}
   