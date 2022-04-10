let people = ["Greg", "Mary", "Devon", "James"];

for(let i=0; i<people.length; i++) {
    console.log(people[i]);
}

people.shift();
people.pop();
people.unshift("Matt");
people.push("Benjamin");

for(let i=0; i<people.length; i++) {
    console.log(people[i]);
    if(people[i] === "Mary") {
        break;
    }
}

let copy = people.slice(2);

// console.log("\n");
// for(let i=0; i<copy.length; i++) {
//     console.log(copy[i]);
// }

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
console.log("\n");
console.log(people);
console.log("\n");
people.splice(2, 1, "Elizabeth", "Arti");
console.log(people);
let withBob = people.concat("Bob");
console.log(withBob);


