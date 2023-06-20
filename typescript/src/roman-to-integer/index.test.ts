import romanToInt from './index'


describe("Given a roman number string,it shoud return a number representing number type", () => {
    it("should return 3 as a number", () => {
      expect(romanToInt('III')).toEqual(3);
    });
    it("should return 58 as a number", () => {
      expect(romanToInt('LVIII')).toEqual(58);
    });
    it("should return 1994 as a number", () => {
      expect(romanToInt('MCMXCIV')).toEqual(1994);
    });
  });
  