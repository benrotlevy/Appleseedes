const add = (obj, keysArr, valuesArr) => {
    for(let i=0; i< keysArr.length; i++) {
        obj[valuesArr[i]] = keysArr[i];
    }
}

const swap = (obj) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const objSwaped = {};
    add(objSwaped, keys, values);
    return objSwaped;
}

const myObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

console.log(swap(myObj));