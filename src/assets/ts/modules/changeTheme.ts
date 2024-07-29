
const btnTheme = document.querySelector(".btn-theme input") as HTMLInputElement;
const inputTheme=document.querySelector(".input-theme") as HTMLInputElement
btnTheme.addEventListener("change", changeTheme);
  function changeTheme(e:Event) {
     
    document.body.classList.remove("style-1", "style-2", "style-3");
    
    if (inputTheme.value === inputTheme.min)
      document.body.classList.add("style-1", "anim-opacity");
    if (+inputTheme.value === +inputTheme.min + +inputTheme.step)
      document.body.classList.add("style-2", "anim-opacity");
    if (inputTheme.value === "12")
      document.body.classList.add("style-3", "anim-opacity");
  }