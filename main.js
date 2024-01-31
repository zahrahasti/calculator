"use strict";
import { errorText } from "./scripts/errorText.js";
import { removeLeadingZeros } from "./scripts/removeLeadingZeros.js";
import {removeDuplicateMathSign} from "./scripts/removeDuplicateMathSign.js";
import { changeTheme } from "./scripts/changeTheme.js";
// Get all elements
const keyPads = document.querySelectorAll("[data-value]");
const showTextResult = document.querySelector(".show-result");
const btnReset = document.querySelector(".btn-reset");
const btnTheme = document.querySelector(".btn-theme input");
const btnDeleLastNum = document.querySelector(".btn-del");
const btnEqual = document.querySelector(".btn-equel");
const btnSigns=document.querySelectorAll(".btn-sign");
let textString;
let calculationComponents = [];
keyPads.forEach((key) => {
  key.addEventListener("click", checkValue);
});
window.addEventListener("keypress",function(e){
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
 
 