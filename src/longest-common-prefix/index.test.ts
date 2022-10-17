import { longestCommonPrefix } from ".";

describe("Longest Common Prefix", () => {
    it("should return fl", () => {
      const arr = ["flower","flow","flight"];
      expect(longestCommonPrefix(arr)).toEqual("fl");
    });
    it("should return empty string", () => {
      const arr = ["dog","racecar","car"]
      expect(longestCommonPrefix(arr)).toEqual("");
    });
    it('should return empty string',()=>{
        const arr: string[] = []
        expect(longestCommonPrefix(arr)).toEqual("");
   
    });
  });
  