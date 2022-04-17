// function getSum(arr1, arr2){
//     const sum = 0;  
//     for (let i=0; i < arr1.length; i++){
//         sum += arr1[i];  // asignment to constatnt
//     }
//     for (let i=0; i < arr2.length; i++){
//         sum += arr2[i];
//     }
// }
// getSum([1,2,3][5,66,23]); // this line was no comma so arrs undefine
// i used js debug terminal


function getSum(arr1, arr2){
    let sum = 0;  
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i]; 
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
    return sum;
}
console.log(getSum([1,2,3],[5,66,23])); 