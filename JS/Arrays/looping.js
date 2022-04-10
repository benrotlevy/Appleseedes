let populations = [8, 60, 300, 500];

const percentageOfWorld2 = function (population) {
    const worldPopulation = 7900;
    return population / worldPopulation * 100;
}

const populationPercentages = (arr) => {
    let percentages = [];
    for(let i=0; i<arr.length; i++) {
        percentages.push(percentageOfWorld2(arr[i]));
    }
    return percentages;
}

console.log(populationPercentages(populations));
