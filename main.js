"use strict";


// Get all elements 
const keyPads=[...document.querySelectorAll("[data-value]")];
const showTextResult=document.querySelector(".show-result");
const btnReset=document.querySelector(".btn-reset");
const btnTheme=document.querySelector(".btn-theme input");
const box=document.querySelector(".btn-theme span")
const btnDeleLastNum=document.querySelector(".btn-del")

// Function to handle calculator
const Calculator={
    x:0,
    num:0,
    init:()=>{
        keyPads.map(key=>{
            key.addEventListener("click",Calculator.calculate)
            btnDeleLastNum.addEventListener("click",Calculator.delLastNum)
            btnReset.addEventListener("click",Calculator.resetResultTest)
            btnTheme.addEventListener("input",Calculator.changeTheme)
        })
    },
    calculate:function(el){
        showTextResult.innerText+=el.target.dataset.value
        const splitResult=showTextResult.textContent.match(/\d+(\.\d+)?|[+*=/-]/g);
        if(splitResult.length>=4&&splitResult[0]==="-"){
           splitResult.shift()
           splitResult[0]=-splitResult[0];
        }
    if(splitResult.length>=4)Calculator.checkValue(splitResult,el)
    if(el.target.dataset.value==="=")Calculator.getResult(splitResult,el)
  },
    checkValue:function(splitResult,el){
        if(splitResult[1]==="+"){
            Calculator.num=+splitResult[0]+(+splitResult[2])
            showTextResult.innerText=Calculator.num;
            showTextResult.innerText+=el.target.dataset.value;
        }
          if(splitResult[1]==="×"){
            Calculator.num=+splitResult[0] * (+splitResult[2]);
            showTextResult.innerText=Calculator.num;
            showTextResult.innerText+=el.target.dataset.value
        }
          if(splitResult[1]==="-"){
            Calculator.num=+splitResult[0] - (+splitResult[2]);
            showTextResult.innerText=Calculator.num;
            showTextResult.innerText+=el.target.dataset.value
        }
          if(splitResult[1]==="/"){
            Calculator.num=+splitResult[0] / (+splitResult[2])
            showTextResult.innerText=Calculator.num;
            showTextResult.innerText+=el.target.dataset.value
        }
    },
     noChangeValue:function(splitResult){if(isNaN(splitResult[2]))showTextResult.innerText=splitResult[0]}
    ,getResult:function(splitResult,el){
      Calculator.checkValue(splitResult,el);
      Calculator.delLastNum();
      Calculator.noChangeValue(splitResult)
    },
    delLastNum:function(){
      showTextResult.innerText=
      showTextResult.innerText.slice(0,-1);
    },
    resetResultTest:function(){
      showTextResult.innerText=""
    }

   ,changeTheme:function(e){
    document.body.classList.remove("style-1","style-2","style-3");
     if(e.target.value===this.min)
     document.body.classList.add("style-1")

     if(+e.target.value===+this.min + (+ this.step))
     document.body.classList.add("style-2")

     if(e.target.value===this.max)
     document.body.classList.add("style-3")
   }
   
}

// call the main function 
Calculator.init();
 