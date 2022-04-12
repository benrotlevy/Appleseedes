// const maxCount = 1000000;
// console.time("My operation")// <---- Starts the timer
// for(let i =0; i < maxCount; i++){
// //Perform the operation to be measured multiple times
// }
// console.timeEnd("My operation") // <---- Stops the time

const obj = {};
console.time("obj timer");
for(let i=1; i<=1000000; i++) {
    obj[i] = i;
}
console.timeEnd("obj timer")

const map = new Map();
console.time("map timer");
for(let i=1; i<=1000000; i++) {
    map.set(i, i);
}
console.timeEnd("map timer");

console.time("obj timer2");
console.log(obj[374735]);
console.timeEnd("obj timer2");

console.time("map timer2");
console.log(map.get(374734));
console.timeEnd("map timer2");

console.time("obj timer3");
obj[2000000] = 2;
console.timeEnd("obj timer3");

console.time("map timer3");
map.set(2000000, 2);
console.timeEnd("map timer3");

console.time("obj timer4");
delete obj[1];
console.timeEnd("obj timer4");

console.time("map timer4");
map.delete(1);
console.timeEnd("map timer4");