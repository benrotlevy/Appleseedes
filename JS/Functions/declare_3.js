function percentageOfWorld1(population) {
    const worldPopulation = 7900;
    return population / worldPopulation * 100;
}

const china = percentageOfWorld1(1441);
const israel = percentageOfWorld1(9);
const us = percentageOfWorld1(330);

console.log(china + " " + israel + " " + us);

const percentageOfWorld2 = function (population) {
    const worldPopulation = 7900;
    return population / worldPopulation * 100;
}

const china2 = percentageOfWorld2(1441);
const israel2 = percentageOfWorld2(9);
const us2 = percentageOfWorld2(330);

console.log(china2 + " " + israel2 + " " + us2);