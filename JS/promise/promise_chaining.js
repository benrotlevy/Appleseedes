function makeAllCaps(words) {
    return new Promise((resolved, rejected) => {
        const arr = [];
        for(let word of words) {
            if(!(typeof word === "string")) {
                rejected("arr should contain only strings");
            }
            arr.push(word[0].toUpperCase() + word.slice(1))
        }
        resolved(arr);
    });
}

const arr = ["return", "new", "Promise"];
makeAllCaps(arr).then(res => {
    return sortWords(res);
})
.then(res => console.log(res))
.catch(res => console.log(res));

function sortWords(words) {
    return new Promise((resolved, rejected) => {
        for(let word of words) {
            if(!(typeof word === "string")) {
                rejected("arr should contain only strings");
            }
        }
        resolved(words.sort());
    });
}