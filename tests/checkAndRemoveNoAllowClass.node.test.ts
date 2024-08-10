 
// checkAndRemoveNoAllowClass.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { checkAndRemoveNoAllowClass } from '@modules/checkAndRemoveNoAllowClass';
 
 
  it('should remove "no-allow" class from operator buttons if lastCharacter is an operator', () => {
    const lastCharacter = '1';
    checkAndRemoveNoAllowClass(lastCharacter);
    expect(checkAndRemoveNoAllowClass(lastCharacter)).toBe(false);
});



  it('should not modify buttons and return undefined if lastCharacter is not an operator', () => {
    const lastCharacter = 'a';
    const result = checkAndRemoveNoAllowClass(lastCharacter);
    expect(result).toBe(false);
  });