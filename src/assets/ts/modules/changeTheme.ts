
import {DomElements} from "@ts/domEl";
let {btnTheme,inputTheme}=DomElements
btnTheme.addEventListener("change", changeTheme);
  function changeTheme(e:Event) {
     const min=+inputTheme.min
     const max=+inputTheme.max;
     const middleValue=+inputTheme.min + +inputTheme.step
     const currentValue=+inputTheme.value
    document.body.classList.remove("style-1", "style-2", "style-3");
    const map=new Map();
    map.set("style-1",min)
    .set("style-2",middleValue)
    .set("style-3",max)
    if (currentValue === map.get("style-1"))
      document.body.classList.add("style-1");
    if (currentValue === map.get("style-2"))
      document.body.classList.add("style-2");
    if (currentValue === map.get("style-3"))
      document.body.classList.add("style-3");
  }