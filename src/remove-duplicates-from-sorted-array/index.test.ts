import {calc} from './index'

describe("test add function", () => {
    it("should return 15 for add(10,5)", () => {
        expect(calc(10)).toBe(20);
    });it("should return 5 for add(2,3)", () => {
        expect(calc(2)).toBe(4);
    });
});