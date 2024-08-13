
  import { addNoAllowClass } from "../ClassManagement/addNoAllowClass";
function checkAndAddNoAllowClass(txt:string){
    if(txt===""){
       addNoAllowClass();
   }
  }
export {checkAndAddNoAllowClass}