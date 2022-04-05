
function describeCountry (country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const israel = describeCountry('israel', 8, 'jerusalem');
const fin = describeCountry('finland', 6, 'helsinki');
const us = describeCountry('US', 300, 'washington DC');

console.log(israel);
console.log(fin);
console.log(us);

