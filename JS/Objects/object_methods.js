const myCountry = {
    country: "Israel",
    capital: "Jerusalem",
    language: "Hebrew",
    population: 9,
    neighbours: ["Jordan", "Egypt", "Lebanon", "Syria"],
    describe() {
        const {
            country,
            capital,
            language,
            population,
            neighbours
        } = this;
        return `${country} has ${population} million people, their mother tongue is ${language}, they have ${neighbours.length} neighbouring countries and a capital called ${capital}`;
    },
    checkIsland() {
        this.isIsland = this.neighbours.length > 0? false: true;
    }
}

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry);