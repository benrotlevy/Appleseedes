let johnAvg = (89 + 120 + 103) / 3;
let mikeAvg = (116 + 94 + 123) / 3;
let maryAvg = (97 + 134 + 105) / 3;

johnAvg = (97 + 134 + 105) / 3;
mikeAvg = (97 + 134 + 105) / 3;
maryAvg = (97 + 134 + 105) / 3;

// johnAvg = (89 + 120 + 103) / 3;
// mikeAvg = (97 + 134 + 105) / 3;
// maryAvg = (97 + 134 + 105) / 3;

// johnAvg = (97 + 134 + 105) / 3;
// mikeAvg = (116 + 94 + 123) / 3;
// maryAvg = (97 + 134 + 105) / 3;

if(johnAvg > mikeAvg) {
    if(johnAvg > maryAvg) {
        console.log("john won with avg " + johnAvg);
    } else if(johnAvg < maryAvg) {
        console.log("mary won with avg " + maryAvg);
    } else {
        console.log("john and mary won with avg" + johnAvg);
    }
} else if(mikeAvg > johnAvg){
    if(mikeAvg > maryAvg) {
        console.log("mike won with avg " + mikeAvg);
    } else if(mikeAvg < maryAvg) {
        console.log("mary won with avg " + maryAvg);
    } else {
        console.log("mike and mary won with avg" + johnAvg);
    }
} else if(mikeAvg === johnAvg && mikeAvg > maryAvg) {
    console.log("john and mike won with avg" + johnAvg);
} else if(mikeAvg === johnAvg && mikeAvg < maryAvg) {
    console.log("mary won with avg " + maryAvg);
} else {
    console.log("john and mike and mary won with avg" + johnAvg);
}