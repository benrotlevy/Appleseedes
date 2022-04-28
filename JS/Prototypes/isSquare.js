
function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

// let mySquare = new Square(10,10,10,10);

Square.prototype.isSquare = function() {
    const {a, b, c, d} = this;
    return a === b && b === c && c === d;
}

// console.log(mySquare.isSquare());