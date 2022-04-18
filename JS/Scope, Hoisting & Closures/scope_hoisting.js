// function funcA() {
//     console.log(a);
//     console.log(foo());
//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }
// funcA();

// first log => undefined
// second log => 2
// we need to declare a before logging it

// var fullName = 'John Doe';
// var obj = {
//     fullName: 'Colin Ihrig',
//     prop: {
//         fullName: 'Aurelio De Rosa',
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

// first log => Aurelio De Rosa. this reffer to the obj contain the function
// second log => John Doe. this reffer to the global obj

// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);

// first log => undefined. a is defined inside function
// second log => number. b is a property of the global obj

// function funcC() {
//     console.log("1");
// }
// funcC();
// function funcC() {
//     console.log("2");
// }
// funcC();

// log 2 twice. last declare overwrite first

// function funcD1() {
//     d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
//     var e = 1;
// }
// funcD2();
// console.log(e);

// first log => 1. d is global property
// second log => error. e is var and var is function block

// function funcE() {
//     console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);
// var f = 1;
// funcE();

// first log => "Value of f in global scope: undefined"
// second log => "Value of f in local scope: 1"
   
