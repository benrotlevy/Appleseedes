const sum = require("./sum");

// console.log(sum(1,2));
test("adds 2 numbers", () => {
    expect(sum(1,2)).toBe(3);
} );