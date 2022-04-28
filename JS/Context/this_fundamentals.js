//console.log(this); // refferes to the window, the window is the obj that we are inside of

// const myObj = {
//     name: "Timmy",
//     greet: () => {
//      console.log(`Hello ${this.name}`);
//     },
// };
// myObj.greet();

//this will point to the window, arrow func dont get new this

// const myObj = {
//     name: "Timmy",
//     greet: function() {
//         console.log(`Hello ${this.name}`);
//     },
// };
// myObj.greet();

// this will work

// const myFuncDec = function () {
//     console.log(this);
// };
   
// this is the window obj that we are inside of

// const myFuncArrow = () => {
//     console.log(this);
// };
// myFuncArrow();

// this is the window obj that we are inside of

// document.querySelector(".element").addEventListener("click",() => {
//     console.log(this);
// });

//this will point to the window, arrow func dont get new this

// document.querySelector(".element").addEventListener("click", function() {
//     console.log(this);
// });

// this will work

console.dir([1]);