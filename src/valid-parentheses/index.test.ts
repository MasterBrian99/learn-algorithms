import isValid from "./index";

describe("Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.", () => {
  it("should return true", () => {
    const s = "()";
    expect(isValid(s)).toEqual(true);
  });
  it("should return true", () => {
    const s = "()[]{}";

    expect(isValid(s)).toEqual(true);
  });
  it("should return false", () => {
    const s = "(]";

    expect(isValid(s)).toEqual(false);
  });
  it("should return false", () => {
    const s = "()[](){]";

    expect(isValid(s)).toEqual(false);
  });
  it("should return false", () => {
    const s = "{}{}()[]";

    expect(isValid(s)).toEqual(true);
  });
  it("should return false", () => {
    const s = "{[]}";

    expect(isValid(s)).toEqual(true);
  });
});
