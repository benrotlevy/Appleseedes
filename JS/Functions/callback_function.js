const isString = (str, func) => {
    if(typeof str === "string") {
        func(str);
    }
}

const print = (str) => {
    console.log(str);
}

isString("benjamin", print);

const firstWordUpperCase = (str, func) => {
    let arr = str.split(" ");
    arr[0] = arr[0].toUpperCase();
    func(arr.join(" "));
}

const dashes = (str) => {
    let str2 = "";
    for(let i=0; i<str.length; i++) {
        if(i===str.length-1) {
            str2 += str[i];
        } else {
            str2 += str[i] + "-";
        }
    }
    console.log(str2);                 
}

firstWordUpperCase("benjamin", dashes);

const myFunc = (num, func) => {
    if(num < 1) {
        console.log("num must be positive");
    } else {
        console.log(func(num));
    }
}

myFunc(0, function(num){return num % 2 === 0});

