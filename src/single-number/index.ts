const singleNumber = (nums: number[]): number => {
  // bit manipulation
  /// n ^ 0 = n
  let res = 0;
  nums.forEach((element) => {
    res = element ^ res;
  });

  return res;
};

export default singleNumber;

/*
//Works.but Space Time Complexity is soooo bad
const singleNumber = (nums: number[]): number => {
  const newArr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (newArr.includes(nums[i])) {
      newArr.splice(newArr.indexOf(nums[i]), 1);
    } else {
      newArr.push(nums[i]);
    }
  }
  return newArr[0];
};

export default singleNumber;

*/

/*
/// Not Work LMAO
const singleNumber = (nums: number[]): number => {
  const sortedArr = nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i] == sortedArr[i + 1]) {
      sortedArr.splice(sortedArr[i], 1);
    }
  }
  return sortedArr[0];
};

export default singleNumber;


*/
