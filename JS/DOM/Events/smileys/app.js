const input = document.querySelector("input");
const btn = document.querySelector("button");
const smileysBox = document.querySelector(".smileys");

btn.addEventListener("click", function() {
    let nums = parseInt(input.value);
    if(nums || nums === 0) {
        const smileys = document.querySelectorAll(".smiley");
        for(let smiley of smileys) {
            smiley.remove();
        }
    }
    for(let i=0; i<nums; i++) {
        const smiley = document.createElement("div");
        smiley.classList.add("smiley");
        smileysBox.append(smiley);
    }
});