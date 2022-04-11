const string = "The more you know, the more you know that you don't know";
const last = (str) => {
    let res;
    for(let i=0; i< str.length; i++) {
        if(str.indexOf("you", i) !== -1) {
            res = str.indexOf("you", i);
        }
    }
    return res;
}

console.log(last(string));
