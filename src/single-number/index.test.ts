import singleNumber from "./index";

describe("Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.", () => {
  it("should return 9 as a number", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(singleNumber(arr)).toEqual(9);
  });
  it("should return 4 as a number", () => {
    const arr = [4, 1, 2, 1, 2];
    expect(singleNumber(arr)).toEqual(4);
  });
  it("should return 1 as a number", () => {
    const arr = [1];
    expect(singleNumber(arr)).toEqual(1);
  });
});
