
export function removeDuplicates(arr: number[]):number [] {
    let pointer = 1; // use pointer to count value.
    for (let index = 1; index < arr.length; index++) {
      if (arr[index] != arr[index - 1]) {
        // console.log(element + " " + arr[index - 1]);
        arr[pointer] = arr[index]
        // console.log(arr);
        pointer= pointer+ 1
      }
    }
    // console.log(arr.splice(pointer));
     arr.length=pointer
     return arr 
  }
  