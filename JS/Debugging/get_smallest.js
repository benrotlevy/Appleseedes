// function findSmallest(a, b, c){
//     if (a > b > c){ // comparison between number and boolean
//         return c;
//     } else if (a > c > b) { // comparison between number and boolean
//         return a; //should be <
//     } else {
//         return b;
//     }
// }
// console.log(findSmallest(70,66, 0)); // typo smalest instead of smallest

function findSmallest(a, b, c){
    if (a > c && b > c){ 
        return c;
    } else if (a < b && c > a) { 
        return a; 
    } else {
        return b;
    }
}
console.log(findSmallest(52,66, 2)); 