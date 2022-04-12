const obj1 = {
    name: "ben"
}
const obj2 = {
    name: "ari"
}
const obj3 = {
    name: "segev"
}

const myMap = new Map();
myMap.set(obj1, "206911901");
myMap.set(obj2, "208762195");
myMap.set(obj3, "205234702");

// console.log(myMap);

for(let obj of myMap) {
    // console.log(obj);
    console.log(`${obj[0].name} id : ${myMap.get(obj[0])}`);
}