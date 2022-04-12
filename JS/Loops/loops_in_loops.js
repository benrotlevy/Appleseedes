const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for(let row of listOfNeighbours) {
    for(let country of row) {
        console.log(`Neighbour: ${country}`);
    }
}
