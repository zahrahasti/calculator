let timer;
export function errorText(text){
    document.querySelector(".format").classList.add("hide")
    document.querySelector(".format").querySelector("p").textContent=text;     
  
   timer=setTimeout(
      () => {
         document.querySelector(".format").classList.remove("hide")
          clearInterval(timer)
    },
      2000,
    );
  }
  
  
  