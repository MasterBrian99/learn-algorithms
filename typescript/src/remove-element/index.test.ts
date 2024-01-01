import removeElement from './index'
describe("Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.", () => {
    it("should return 2 as a number", () => {
      expect(removeElement([3,2,2,3],3)).toEqual(2);
    });
    it("should return 58 as a number", () => {
      expect(removeElement([0,1,2,2,3,0,4,2],2)).toEqual(5);
    });
  
  });
  