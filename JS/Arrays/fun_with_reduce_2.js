// const arr = [{a:3},{a:5},{a:7},{a:3},{a:2},{a:2},{a:1}];

const extractOnlyValue = (arr, key) => {
    return arr.reduce((res, current) => {
        res.push(current[key]);
        return res;
    }, [])
}

// console.log(extractOnlyValue(arr, "a"));

const countOnlyVowels = (str) => {
    return str.toLowerCase().split("").reduce((obj, curr) => {
        if(curr === "a" || curr === "e" || curr === "i" ||curr === "o" || curr === "u") {
            if(obj[curr]) {
                obj[curr] += 1;
            } else {
                obj[curr] = 1;
            }
        }
        return obj;
    }, {})
}

// console.log(countOnlyVowels("hElloAAai"));

const addKeyAndValue = (arr, key, value) => {
    return arr.reduce((res, current) => {
        const obj = {...current};
        obj[key] = value;
        res.push(obj);
        return res;
    }, [])
}

// console.log(addKeyAndValue(arr, "b", 20));
// console.log(arr);