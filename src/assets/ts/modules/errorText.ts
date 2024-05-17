//@ts-ignore
import { DomElements } from "@ts/domEl";
const {incorrectFormatWrapper}=DomElements
let timer;
 function errorText(txt:string){
    incorrectFormatWrapper.classList.add("hide");
    const incorrectFormatWrapperChild=incorrectFormatWrapper.querySelector("p") as HTMLParagraphElement
      incorrectFormatWrapperChild.textContent=txt;     
  
   timer=setTimeout(
      () => {
         incorrectFormatWrapper.classList.remove("hide")
          clearInterval(timer)
    },
      2000,
    );
  }
  
  
  export {errorText}