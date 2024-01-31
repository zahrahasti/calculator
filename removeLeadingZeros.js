export function removeLeadingZeros(string) {
    return string.replace(/\b0+(\d+)/g, '$1');
  }
  