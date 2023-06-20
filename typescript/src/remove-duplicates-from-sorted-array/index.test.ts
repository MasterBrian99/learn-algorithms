import { removeDuplicates } from "./index";

describe("Remove Duplicates from Sorted Array", () => {
  it("should return [0,1,2,3,4,5,6] as a numbers array", () => {
    const arr = [0, 0, 0, 1, 1, 1, 2, 3, 4, 4, 5, 6, 6];
    expect(removeDuplicates(arr)).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });
  it("should return [0,1,2,3,4,5,6,7,8,9,10,12,20,21,22,23] as a numbers array", () => {
    const arr = [
      0, 0, 0, 0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 12, 12,
      20, 20, 21, 21, 21, 22, 23, 23,
    ];
    expect(removeDuplicates(arr)).toEqual([0,1,2,3,4,5,6,7,8,9,10,12,20,21,22,23]);
  });
});
