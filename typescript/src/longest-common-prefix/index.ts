export function longestCommonPrefix(strs: string[]): string {
    let prefix =""
    if (strs.length==0) return prefix
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !=strs[0][i]) {
                return prefix
            }
        }
        prefix +=strs[0][i]
        
    }
    return prefix
};

/*

function longestCommonPrefix(strs: string[]): string {
    let prefix =""
  if (strs.length==0) return prefix
  let longestString = "";
  for (let i=0; i<strs.length; i++){
      if (strs[i].length > longestString.length){
        longestString = strs[i];
      }
    }
  for (let i = 0; i < longestString.length; i++) {
      const element = longestString[i];
      for (let j = 0; j < strs.length; j++) {
          if (strs[j][i] !==element) return prefix
          
      }
      prefix = prefix+ element
  }
  return prefix
};
*/