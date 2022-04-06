const boom = (n) => {
    for(let i = 1; i <= n; i++) {
        if(i % 7 === 0) {
            let arr = [i];
            if(arr.includes(7)) {
                console.log('BOOM-BOOM')
            } else {
                console.log('BOOM')
            }
        } else {
            console.log(i)
        }
    }
}