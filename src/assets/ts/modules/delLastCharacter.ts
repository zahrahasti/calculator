import { DomElements } from "@ts/domEl";
const operators=["+","-","*","/"]
let {showTextResult,calculationComponents,operatorButtons}=DomElements;
function delLastCharacter() { 
    
    if(showTextResult.textContent!==null){
    const lastCharacter= showTextResult.textContent.slice(-1)
    showTextResult.textContent =showTextResult.textContent.slice(0, -1);
    
    operators.forEach(operator=>{
      if(operator===lastCharacter){
         operatorButtons.forEach(el=>{
          el.classList.remove("no-allow")
         })
      }
    })
   }
   calculationComponents.pop();
 }

 export {delLastCharacter};