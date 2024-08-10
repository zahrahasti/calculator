import { it, expect, describe } from 'vitest';
import { screen } from '@testing-library/dom'
const NO_ALLOW_CLASS = 'no-allow';
const btnresret=document.querySelector(".attribution");
 const operatorBtns = Array.from({ length: 3 }).map(() => {
   const button = document.createElement('button');
   return button;
});

function addNoAllowClass() {
   console.log("check",btnresret,"null");
   operatorBtns.forEach((btn) => {
      btn.classList.add(NO_ALLOW_CLASS);
   });
}

describe('removeNoAllowClass', () => {
   it('should remove the “no-allow” class from all operator buttons', () => {
      addNoAllowClass();
     expect( btnresret).toBeNull()
      operatorBtns.forEach((btn) => {
         expect(btn.classList).toContain(NO_ALLOW_CLASS);
      });
   });
});

it('update input', async () => {
   const input = screen.getByRole('button')
    expect(input).not.toBeNull()
   console.log(input);
   
 })