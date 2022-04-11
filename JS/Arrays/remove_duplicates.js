const remove = (arr) => {
    const arr2 = [...arr];
    for(let i=arr2.length-1; i>-1; i--) {
        if(arr2.indexOf(arr2[i]) !== -1 && arr2.indexOf(arr2[i]) !== i) {
            arr2.splice(i, 1);
            // i++;
        }
    }
    return arr2;
}

console.log(remove([3,4,4,3,6,3]));