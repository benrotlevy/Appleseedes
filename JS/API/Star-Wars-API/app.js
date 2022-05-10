const peoples = [];

async function getCharacters() {
    for(let i=1; i<11; i++) {
        const prom = await fetch(`https://swapi.dev/api/people/${i}/`);
        const data = await prom.json();
        const character = {};
        character.name = data.name;
        character.height = data.height;
        character.hair = data.hair_color;
        const planet = await fetch(data.homeworld);
        const planetData = await planet.json();
        character.planet = {name: planetData.name, population: planetData.population}
        peoples.push(character);
    }
    createTable();
}

function createTable() {
    let output = `
        <table>
            <tr>
            <th colspan=5>Star Wars</th>
            </tr>
            <tr>
                <th>name</th>
                <th>hair</th>
                <th>height</th>
                <th>planet name</th>
                <th>planet population</th>
            </tr>`;
    for(let char of peoples) {
        output += `
        <tr>
            <td>${char.name}</td>
            <td>${char.hair}</td>
            <td>${char.height}</td>
            <td>${char.planet.name}</td>
            <td>${char.planet.population}</td>
        </tr>`;
    }
    output += `</table>`;
    document.body.innerHTML = output;
}

getCharacters();