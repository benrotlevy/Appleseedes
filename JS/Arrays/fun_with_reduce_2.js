const arr = [{a:3},{a:5},{a:7},{a:3},{a:2},{a:2},{a:1}];

const extractOnlyValue = (arr, key) => {
    const res = [];
    arr.reduce((total, current) => {
        res.push(current[key]);
        // return total;
    }, 0)
    return res;
}

// console.log(extractOnlyValue(arr, "a"));

const countOnlyVowels = (str) => {
    const obj = {};
    str.split("").reduce((total, curr) => {
        let letter = curr.toLowerCase();
        if(letter === "a" || letter === "e" || letter === "i" ||letter === "o" || letter === "u") {
            if(obj[curr]) {
                obj[curr] += 1;
            } else {
                obj[curr] = 1;
            }
        }
    }, 0)
    return obj;
}

// console.log(countOnlyVowels("hElloAAai"));

const addKeyAndValue = (arr, key, value) => {
    const res = [];
    arr.reduce((t, current) => {
        const obj = {...current};
        obj[key] = value;
        res.push(obj);
    }, 0)
    return res;
}

// console.log(addKeyAndValue(arr, "b", 20));
// console.log(arr);