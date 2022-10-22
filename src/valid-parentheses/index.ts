export default function isValid(s: string): boolean {
  const map: {
    "(": string;
    "{": string;
    "[": string;
  } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const newArr = s.split("");
  const stack = [];
  for (let i = 0; i < newArr.length; i++) {
    // @ts-ignore
    if (map[newArr[i]]) {
      // @ts-ignore
      stack.push(map[newArr[i]]);
    } else if (stack.length > 0 && stack[stack.length - 1] == newArr[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

/*

/// partialy works
export default function isValid(s: string): boolean {
  const arr = ["(", ")", "{", "}", "[", "]"];

  const valueArr = s.split("");
  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr[i] == arr[0]) {
      if (valueArr[i + 1] != arr[1]) {
        return false;
      }
    } else {
      if (valueArr[i] == arr[2]) {
        if (valueArr[i + 1] != arr[3]) {
          return false;
        }
      } else {
        if (valueArr[i] == arr[4]) {
          if (valueArr[i + 1] != arr[5]) {
            return false;
          }
        }
      }
    }
  }

  return true;
}


*/
