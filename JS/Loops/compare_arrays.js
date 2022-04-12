const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compare = (arr1, arr2) => {
    const same = [];
    for(let i of arr1) {
        for(let j of arr2) {
            if(j === i && !same.includes(j)) {
                same.push(j);
                break;
            }
        }
    }
    return same;
}

console.log(compare(food, food1));