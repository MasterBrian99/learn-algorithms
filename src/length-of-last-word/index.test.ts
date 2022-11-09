import lengthOfLastWord from ".";

describe(" Length of Last Word", () => {
  it("should return 5", () => {
    const s = "Hello World";
    expect(lengthOfLastWord(s)).toEqual(5);
  });
  it("should return 4", () => {
    const s = "   fly me   to   the moon  ";
    expect(lengthOfLastWord(s)).toEqual(4);
  });
  it("should return 6", () => {
    const s = "luffy is still joyboy";
    expect(lengthOfLastWord(s)).toEqual(6);
  });
});
