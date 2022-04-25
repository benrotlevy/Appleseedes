const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const p = document.querySelector("p");
let font = window.getComputedStyle(p).fontSize;
font = parseInt(font);

plus.addEventListener("click", function() {
    if(font < 100) {
        p.style.fontSize = `${font+=1}px`;
    }
    console.log(font);
});

minus.addEventListener("click", function() {
    if(font > 6) {
        p.style.fontSize = `${font-=1}px`;
    }
});