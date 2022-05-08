const obj = {
    name: 'benjamin',
    print() {
        console.log(this.name);
    },
    printAfterSecond() {
        setTimeout(this.print.bind(obj), 1000);
    }
}

obj.printAfterSecond();