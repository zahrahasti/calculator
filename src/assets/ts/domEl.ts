
const DomElements={
    keyPads : document.querySelectorAll("[data-value]") as NodeListOf<HTMLElement>,
    showTextResult : document.querySelector(".show-result") as HTMLHeadingElement,
    btnReset : document.querySelector(".btn-reset") as HTMLElement,
    btnEqual : document.querySelector(".btn-equel") as HTMLElement,
    operatorButtons:document.querySelectorAll(".btn-sign") as NodeListOf<HTMLElement>,
    btnDeleLastNum :document.querySelector(".btn-del") as HTMLElement ,
    incorrectFormatWrapper:document.querySelector(".wrapper-incorrect-format") as HTMLElement ,
   calculationComponents:[] as string[],
   textString:"" 
}

export {DomElements}