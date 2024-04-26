


 function removeLeadingZeros(txt:string) {
    return txt.replace(/\b0+(\d+)/g, '$1');
  }
  
export {removeLeadingZeros}