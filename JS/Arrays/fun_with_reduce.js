const numbers = [10,40,30,5,25];

const max = (arr) => {
    return arr.reduce((max, current) => {
        if(max < current) return current;
        return max;
    })
}

// console.log(max(numbers));

const sumOfEven = (arr) => {
    return arr.reduce((sum, current) => {
        if(sum % 2 === 1) sum = 0;
        if(current % 2 === 0) return sum += current;
        return sum;
    })
}

// console.log(sumOfEven(numbers));

const average = (arr) => {
    return arr.reduce((total, current, i) => {
        if(i+1 === arr.length) return (total + current) / arr.length;
        return (total + current);
    })
}

console.log(average(numbers));