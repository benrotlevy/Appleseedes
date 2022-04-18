// var b = 1;
// function someFunction(number) {
//     function otherFunction(input) {
//         return b;
//     }
//     b = 5;
//     return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);

//firstResult = function otherFunction(9)
//result = 5;

// var a = 1;
// function b2() {
//     a = 10;
//     return;
//     function a() { }
// }
// b2();
// console.log(a);

//log 1 a doesnt change

let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}