
const DomElements={
    keyPads : document.querySelectorAll("[data-value]") as NodeListOf<HTMLElement>,
    calOutput : document.querySelector(".calc-output") as HTMLHeadingElement,
    btnReset : document.querySelector(".btn-reset") as HTMLElement,
    btnEqual : document.querySelector(".btn-equel") as HTMLElement,
    operatorButtons:document.querySelectorAll(".operator") as NodeListOf<HTMLElement>,
    btnDeleLastNum :document.querySelector(".btn-del") as HTMLElement ,
    incorrectFormatWrapper:document.querySelector(".wrapper-incorrect-format") as HTMLElement ,
   calculationComponents:[] as string[],
   textString:"" ,
   btnTheme : document.querySelector(".btn-theme input") as HTMLInputElement,
   inputTheme: document.querySelector(".input-theme") as HTMLInputElement,
   incorrectFormatWrapperChild:document.querySelector("p") as HTMLParagraphElement
}

export {DomElements}