const foods = ["sabich", "falafel", "hummus", "pizza with extra pineapple"];

const ascending = [...foods].sort();
// console.log(ascending);
const descending = [...foods].sort((a, b) => {
    if(a[0] > b[0]) {
        return -1;
    } else if(a[0] < b[0]) {
        return 1;
    }
    return 0;
});
// console.log(descending);

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

const ascending2 = [...foodsWithUpperCase].sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a[0] < b[0]) {
        return -1;
    } else if(a[0] > b[0]) {
        return 1;
    }
    return 0;
});
// console.log(ascending2);
const descending2 = [...foodsWithUpperCase].sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a[0] > b[0]) {
        return -1;
    } else if(a[0] < b[0]) {
        return 1;
    }
    return 0;
});
// console.log(descending2);

const longest = [...foods].sort((a,b) => {
    if(a.length > b.length) {
        return -1;
    }
    if(a.length < b.length) {
        return 1;
    }
    return 0;
})

// console.log(longest);



   