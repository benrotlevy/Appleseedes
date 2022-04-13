const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

const getNames = (arr) => {
    return arr.map(element => {
        return element.name;
    })
}

// console.log(getNames(data));

const getOld = (arr) => {
    const arr2 = [];
    arr.forEach(element => {
        if(getYear(element) < 1990) {
            arr2.push(element);
        }
    });
    return arr2;
}

const getYear = (obj) => {
    const arr = obj.birthday.split("-");
    let num = parseInt(arr[2]);
    return num;
}

// console.log(getOld(data));

const getFood = (arr) => {
    const obj = {};
    arr.forEach((e, i) => {
        for(let key in e.favoriteFoods) {
            for(let food of arr[i].favoriteFoods[key]) {
                if(obj[food]) {
                    obj[food] += 1;
                } else {
                    obj[food] = 1;
                }
            }
        }
    })
    return obj;
}

console.log(getFood(data));



