const isValid = require("./validParentheses.easy");

test("Example 1", () => {
    expect(isValid("()")).toBe(true);
})

test("Example 2", () => {
    expect(isValid("()[]{}")).toBe(true);
})

test("Example 3", () => {
    expect(isValid("(]")).toBe(false);
})