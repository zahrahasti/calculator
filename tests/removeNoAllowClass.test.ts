import { it, expect, describe } from 'vitest';

const NO_ALLOW_CLASS = 'no-allow';

const operatorBtns = Array.from({ length: 3 }).map(() => {
   const button = document.createElement('button');
   button.classList.add(NO_ALLOW_CLASS);

   return button;
});

function removeNoAllowClass() {
   operatorBtns.forEach((btn) => {
      btn.classList.remove(NO_ALLOW_CLASS);
   });
}

describe('removeNoAllowClass', () => {
   it('should remove the “no-allow” class from all operator buttons', () => {
      removeNoAllowClass();

      operatorBtns.forEach((btn) => {
         expect(btn.classList).not.toContain(NO_ALLOW_CLASS);
      });
   });
});