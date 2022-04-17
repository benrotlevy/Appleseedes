const numbers = [1, -5, 666, 2, 400, 11];

const ascending = [...numbers].sort((a, b) => a - b);
// console.log(ascending);
const descending = [...numbers].sort((a, b) => b - a);
// console.log(descending);

