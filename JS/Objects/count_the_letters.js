const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const add = (obj, letter) => {
    if(obj[letter]) {
        obj[letter] += 1;
    } else {
        obj[letter] = 1;
    }
}

const counter = (arr) => {
    const count = {};
    for(let word of arr) {
        for(let j=0; j<word.length; j++) {
            if(word[j].toLowerCase() !== " ") {
                add(count, word[j].toLowerCase());
            }
        }
    }
    return count;
}

console.log(counter(array));
