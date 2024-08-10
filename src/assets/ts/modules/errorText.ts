
import { DomElements } from "@ts/domEl";
const {incorrectFormatWrapper,incorrectFormatWrapperChild}=DomElements
let timer: ReturnType<typeof setTimeout>;

type errorDevideByZero="Can`t divide by zero";
type invalidFormatError="Invalid format used";
 
 function errorText(errorTxt:errorDevideByZero|invalidFormatError){
    incorrectFormatWrapper.classList.add("hide");
    incorrectFormatWrapperChild.textContent=errorTxt;     
  
   timer=setTimeout(
      () => {
         incorrectFormatWrapper.classList.remove("hide")
          clearInterval(timer)
    },
      2000,
    );
  }
  
  
  export {errorText}