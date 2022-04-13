const num = [1,2,3,4,5,6,7,8,9];
const myStr = ["a", "b", "c", "d"]

const doubleValues = (arr)=> {
    return arr.map(e => {return e*2});
}

// console.log(doubleValues(num));

const onlyEvenValues = (arr)=> {
    const arr2 = [];
    arr.forEach(element => {
        if(element % 2 === 0) {
            arr2.push(element);
        }
    });
    return arr2;
}

// console.log(onlyEvenValues(num));

const showFirstAndLast = (arr) => {
    const arr2 = [];
    arr.forEach((element, i) => {
        if(i === 0 || i === arr.length-1) {
            if(typeof element === "string") {
                arr2.push(element);
            }
        }
    });
    return arr2;
}

// console.log(showFirstAndLast(myStr));

const vowelCount = (str) => {
    const arr = str.toLowerCase().split("");
    const obj = {};
    arr.forEach((e) => {
        if(e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
            if(obj[e]) {
                obj[e] += 1;
            } else {
                obj[e] = 1;
            }
        }
    });
    return obj;
}

// console.log(vowelCount("hello wOrld I AM BENjamin"));

const capitalize = (str) => {
    const arr = str.split("");
    const arr2 =  arr.map(e => {
        if(e <= "z" && e >= "a") {
            return e.toUpperCase();
        }
        return e;
    })
    return arr2.join("");
}

// console.log(capitalize("hello wOrld I AM BENjamin"));

const shiftLetters = (str) => {
    const arr = str.split("");
    const arr2 =  arr.map(e => {
        if((e <= "z" && e > "a") || (e <= "Z" && e > "A")) {
            let before = String.fromCharCode(e.charCodeAt()-1);
            return before;
        }
        return e;
    })
    return arr2.join("");
}

// console.log(shiftLetters("i Am"));

const swapCase = (str) => {
    arr = str.split(" ");
    arr.forEach((e, i) => {
        if(i % 2 === 1) {
            arr[i] = capitalize(e);
        }
    })
    return arr.join(" ");
}

// console.log(swapCase("hello world i am great progrramer"));











