const stringsLength = (arr) => {
    let length = [];
    let i=0;
    while(i<arr.length) {
        length.push(arr[i].length);
        i++;
    }
    return length;
}

console.log(stringsLength(["boo", "doooo", "hoo","ro"]));

// for loop is better because its 1 line and the scope of i is smaller