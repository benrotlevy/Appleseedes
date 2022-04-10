const stringsLength = (arr) => {
    let length = [];
    for(let i=0; i<arr.length; i++) {
        length.push(arr[i].length);
    }
    return length;
}

console.log(stringsLength(["boo", "doooo", "hoo","ro"]));