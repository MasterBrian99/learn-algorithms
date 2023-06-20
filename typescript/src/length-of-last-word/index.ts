function lengthOfLastWord(s: string): number {
  var i: number = s.length - 1;
  var length: number = 0;
  while (i >= 0) {
    if (s[i] != " ") {
      while (i >= 0 && s[i] != " ") {
        length += 1;
        i -= 1;
      }
      return length;
    }
    i -= 1;
  }

  return length;
}

export default lengthOfLastWord;

/*

// Build-in methods
function lengthOfLastWord(s: string): number {
    console.log(s);
    const tempArr = s.trim().split(" ");
    console.log(tempArr[tempArr.length - 1].length);
  
    return tempArr[tempArr.length - 1].length;
  }
  
  export default lengthOfLastWord;
*/
