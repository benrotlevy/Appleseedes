const steps = (n) => {
    let step = "";
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n; j++) {
            if(j <= i) {
                step += "#";
            } else {
                step += "*";
            }
        }
        console.log(step);
        step = "";
    }
}

// steps(4);

const steps2 = (n) => {
    for(let i=1; i<=n; i++) {
        console.log("#".repeat(i) + "*".repeat(n-i));
    }
}

steps2(4);
