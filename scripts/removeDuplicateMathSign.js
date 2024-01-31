export function removeDuplicateMathSign(calculationComponents) {
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

