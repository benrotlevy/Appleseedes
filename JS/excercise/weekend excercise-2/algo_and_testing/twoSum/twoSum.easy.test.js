const twoSum = require("./twoSum.easy");

test("Examle 1", () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
})

test("Examle 2", () => {
    expect(twoSum([3,2,4], 6)).toEqual([1,2]);
})

test("Examle 3", () => {
    expect(twoSum([3,3], 6)).toEqual([0,1]);
})