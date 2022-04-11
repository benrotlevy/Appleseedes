
let arr = Array(3).fill({});
// console.log(arr);
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
let arr2 = range(1, 100, 1)
console.log(arr2);
// console.log(typeof arr);
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

const object2 = Object.assign({}, arr2);
console.log(object2);

  
console.log(Object.values(object1));

console.log(Array.isArray(object1));

// true copy
let copy = arr2.slice();
copy.fill(2);
console.log(arr2);

// actually one array
let arr3 = arr2;
arr3.fill(2);
// console.log(arr2);

