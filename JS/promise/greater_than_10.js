function greaterThanTen(num) {
    return new Promise((resolved, rejected) => {
        if(num > 10) {
            resolved("num greater than 10");
        } else {
            rejected("num less than 10");
        }
    })
}

greaterThanTen(9).then(res => console.log(res)).catch(res => console.log(res));