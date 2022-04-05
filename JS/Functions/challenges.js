function isValid (name, pass) {
    if(pass.length < 8 || pass.indexOf('') > -1 || pass.indexOf(name) > -1) {
        return false;
    }
    return true;
}

function avg (arr) {
    let counter=0, sum=0;
    for(let i=0; i<arr.length; i++) {
        counter++;
        sum+=arr[i];
    }
    return sum/counter;
}