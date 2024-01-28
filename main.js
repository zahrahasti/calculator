"use strict";

// Get all elements
const keyPads = [...document.querySelectorAll("[data-value]")];
const showTextResult = document.querySelector(".show-result");
const btnReset = document.querySelector(".btn-reset");
const btnTheme = document.querySelector(".btn-theme input");
const btnDeleLastNum = document.querySelector(".btn-del");
const btnEqual = document.querySelector(".btn-equel");
const main = document.querySelector(".main");
const btnSigns=document.querySelectorAll(".btn-sign");
let textString;
let calculationComponents = [];
keyPads.map((key) => {
  key.addEventListener("click", checkValue);
});
window.addEventListener("keypress",function(e){
console.log(e);
  if(!isNaN(e.key) && e.code!=="Space")showTextResult.textContent+=`${eval(removeLeadingZeros(`${e.key}`))}`;
   btnSigns.forEach(btn=>btn.classList.remove("no-allow"));
   calculationComponents.push(e.key);
   textString=calculationComponents.join("");
   removeDuplicateMathSign(showTextResult.textContent)
})
btnEqual.addEventListener("click", () => calculate(textString));
btnReset.addEventListener("click", resetText);
btnDeleLastNum.addEventListener("click", delLastCharacter);
btnTheme.addEventListener("change", changeTheme);


// delete last charecter in show
function delLastCharacter() {
   showTextResult.textContent = showTextResult.textContent.slice(0, -1);
  calculationComponents.pop();
  if(textString)
  textString = textString.slice(0, -1);
}


// don`t allow to user to enter math sign as a first parameter
function delFirstChareacter(){
  showTextResult.textContent = showTextResult.textContent.slice(0,-3);
  calculationComponents.pop();
  textString = textString.slice(0,-3);
}

// reset text
function resetText() {
  calculationComponents = [];
  showTextResult.textContent = "";
  textString = "";
}

function checkValue(e) {
   btnSigns.forEach(sign=>{
    if(showTextResult.textContent===sign.dataset.value){
          sign.classList.add("no-allow");
          console.log(textString,calculationComponents);
          delFirstChareacter()
         
    }})



 
  if (!e.target.classList.contains("no-allow")) {
    const value = e.target.dataset.value;
    showTextResult.textContent += value;
    calculationComponents.push(value);
    textString = calculationComponents.join("");
    removeDuplicateMathSign(showTextResult.textContent);
  }
}

// calulate
function calculate(string) {
  if(eval(removeLeadingZeros(`${string}`))===Infinity){
    errorText("Can`t divide by zero");
    return;
  }
  if (isNaN(string.at(-1))) errorText("Invalid format used")
   else {
    showTextResult.textContent = `${eval(removeLeadingZeros(`${string}`))}`;
    string = showTextResult.textContent;
    calculationComponents = [];
    calculationComponents.push(string);
  }
  
}

// change the theme for calulator
function changeTheme(e) {
  document.body.classList.remove("style-1", "style-2", "style-3");
  if (e.target.value === this.min)
    document.body.classList.add("style-1", "anim-opacity");
  if (+e.target.value === +this.min + +this.step)
    document.body.classList.add("style-2", "anim-opacity");
  if (e.target.value === this.max)
    document.body.classList.add("style-3", "anim-opacity");
}

// find a solution to Hiw to user don`t enter + or - again after
function removeDuplicateMathSign(calculationComponents) {
  const consecutiveMathSigns = /(\d[+\-*/]{2,})/.test(calculationComponents);
  let repeatDel = 0;
  if (consecutiveMathSigns) {
    document.querySelectorAll(".btn-sign").forEach((btn) => {
      btn.classList.add("no-allow");
      repeatDel++;
      if (repeatDel === 1) delLastCharacter();
    });
  } else {
    document
      .querySelectorAll(".btn-sign")
      .forEach((btn) => btn.classList.remove("no-allow"));
  }
}
 

function errorText(text){
  document.querySelector(".format").classList.add("hide")
  document.querySelector(".format").querySelector("p").textContent=text;     

 setTimeout(
    () => document.querySelector(".format").classList.remove("hide"),
    2000,
  );
}


function removeLeadingZeros(string) {
  return string.replace(/\b0+(\d+)/g, '$1');
}

 