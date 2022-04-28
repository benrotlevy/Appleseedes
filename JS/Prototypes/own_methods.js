
const arr1 = [1,2,3,4];

Array.prototype.filter = function(callBack, thisArg) {
    const newArr = [];
    // const newCallBack = callBack.bind(thisArg);
    for(let i=0; i<this.length; i++) {
        if(callBack.call(thisArg||this.this, this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

// const arr2 = arr1.filter(function(e, i, arr) {return e === this.a}, {a:1});
const arr6 = arr1.filter(function(e, i, arr) {console.log(this);});
// console.log(arr2);

Array.prototype.find = function(callBack) {
    for(let i=0; i<this.length; i++) {
        if(callBack(this[i], i, this)) {
            return this[i];
        }
    }
}

const find = arr1.find(e => e === 1);
// console.log(find);

Array.prototype.reduce = function(callBack, initialValue) {
    let value;
    let index;
    if(initialValue) {
        value = initialValue;
        index = 0;
    } else {
        value = this[0];
        index = 1;
    }
    for(; index<this.length; index++) {
        value = callBack(value, this[index], index, this);
    }
    return value;
}

const reduced = arr1.reduce((previous, current) => previous + current, 10);
// console.log(reduced);
