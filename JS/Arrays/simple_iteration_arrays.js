const array = [1,7,3,0,-5,7,3,9];

for(let i=0; i<array.length; i++) {
    console.log(array[i]);
}

const arrayLength = (arr) => {
    let length = 0;
    for(let i=0; i<arr.length; i++) {
        length++;
    }
    return length;
}

// console.log(arrayLength(array));

const arraySum = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// console.log(arraySum(array));

const arrayMulti = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum *= arr[i];
    }
    return sum;
}

console.log(arrayMulti(array));
