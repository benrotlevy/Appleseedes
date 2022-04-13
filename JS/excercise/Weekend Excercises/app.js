// Ex1.1 - Yes or No 
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" 
// string for false. 

const printYesOrNo = (boolean) => {
    if(boolean) {
        console.log("Yes");
    } else {
        console.log("No");
    }
} 

// Ex2.1 - Sum of lowest numbers 
// Create a function that returns the sum of the two lowest positive numbers given an array of 
// minimum 4 positive integers. No floats or non-positive integers will be passed. 
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
// [10, 343445353, 3453445, 3453545353453] should return 3453455

const sumTwoLowest = (arr) => {
    let first = Number.MAX_VALUE , second = Number.MAX_VALUE-1;
    for(let num of arr) {
        if(num < first) {
            second = first;
            first = num;
        } else if (num < second) {
            second = num;
        }
    }
    return first + second;
}

// Ex2.2 - One and Zero - Binary  
// Given an array of ones and zeroes, convert the equivalent binary value to an integer. 
 
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1. 
 
// Examples: 
 
// Testing: [0, 0, 0, 1] ==> 1 
// Testing: [0, 0, 1, 0] ==> 2 
// Testing: [0, 1, 0, 1] ==> 5 
// Testing: [1, 0, 0, 1] ==> 9 
// Testing: [0, 0, 1, 0] ==> 2 
// Testing: [0, 1, 1, 0] ==> 6 
// Testing: [1, 1, 1, 1] ==> 15 
// Testing: [1, 0, 1, 1] ==> 11 
// However, the arrays can have varying lengths, not just limited to 4.

const binaryToInt = (arr) => {
    let multiplyBy = 1;
    let sum = 0;
    for(let i = arr.length-1; i>-1; i--) {
        sum += arr[i]*multiplyBy;
        multiplyBy *= 2;
    }
    return sum;
}

// Ex2.3 - Find the Next Perfect Square 
 
// You might know some pretty large perfect squares. But what about the NEXT one? 
 
// Complete the findNextSquare method that finds the next integral perfect square after the one 
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is 
// also an integer. 
 
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the 
// parameter is positive. 
 
// Examples: 
 
// findNextSquare(121) --> returns 144 
// findNextSquare(625) --> returns 676 
// findNextSquare(114) --> returns -1 since 114 is not a perfect 

const findNextSquare = (num) => {
    let product = -1;
    for(let i =1; i <= num/2; i++) {
        if(i*i === num) {
            product = i;
            break;
        }
    }
    if(product === -1) {
        return product;
    }
    return (product+1) * (product+1);
}

// Ex2.4 - Unique 
 
// There is an array with some numbers. All numbers are equal except for one. Try to find it! 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
// It’s guaranteed that array contains at least 3 numbers. 

const findUniq = (arr) => {
    let first = arr[0];
    let second = arr[1];
    let third = arr[3];
    if(first === second && second === third) {
        for(let num of arr) {
            if(num !== first) {
                return num;
            }
        }
    } else if(first === second && second !== third) {
        return third;
    } else if(first !== second && second !== third) {
        return second;
    } else {
        return first;
    }
}

// Ex2.5 - Summation 
 
// Write a program that finds the summation of every number from 1 to num. The number will 
// always be a positive integer greater than 0. 
 
// For example: 
// summation(2) -> 3 
// 1 + 2 
 
// summation(8) -> 36 
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

const summation = (num) => {
    let sum = 0;
    for(let i=1; i<=num; i++) {
        sum += i;
    }
    return sum;
}

// The first century spans from the year 1 up to and including the year 100, The second - from the 
// year 101 up to and including the year 200, etc. 
// Task : 
// Given a year, return the century it is in. 
// Input , Output Examples :: 
// centuryFromYear(1705)  returns (18) 
// centuryFromYear(  1900)  returns (19) 
// centuryFromYear(1601)  returns (17) 
// centuryFromYear(2000)  returns (20)

const centuryFromYear = (year) => {
    let century = Math.floor(year/100) +1;
    if(year % 100 === 0) {
        century--;
    }
    return century;
}

// Ex2.7 - Basic Math 
 
// Your task is to create a function that does four basic . 
// The function should take three arguments - operation(string/char), value1(number), 
// value2(number). 
// The function should return result of numbers after applying the chosen operation. 
// Examples 
// basicOp('+', 4, 7)         // Output: 11 
 
// basicOp('-', 15, 18)       // Output: -3 
// basicOp('*', 5, 5)         // Output: 25 
// basicOp('/', 49, 7)        // Output: 7

const basicOp = (operation, val1, val2) => {
    if(operation === "+") {
        return val1 + val2;
    }
    if(operation === "*") {
        return val1 * val2;
    }
    if(operation === "-") {
        return val1 - val2;
    }
    if(operation === "/") {
        return val1 / val2;
    }
}
