const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id){
    return candyStore.candies.find(candy => candy.id === id);
}

// console.log(getCandy(candyStore, "5hd7y"));

function getPrice(candyStore, id){
    const found = candyStore.candies.find(candy => candy.id === id);
    return found.price;
} 

// console.log(getPrice(candyStore, "5hd7y"));

function addCandy(candyStore, id, name, price){
    candyStore.candies.push({name : name, id: id, price: price, amount: 1});
    // return candyStore.candies;  for debug
}

// console.log(addCandy(candyStore, "2e45", "bamba", 10));

function buy(candyStore, id){
    const candy = getCandy(candyStore, id);
    if(candy.amount > 0) {
        candyStore.cashRegister += candy.price;
        candy.amount -= 1;
    }
}

// buy(candyStore, "5hd7y");
// console.log(candyStore);

