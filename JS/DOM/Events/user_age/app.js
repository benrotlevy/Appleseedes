const btn = document.querySelector("button");
const input = document.querySelector("input");
const h4 = document.createElement("h4");
document.body.appendChild(h4);

btn.addEventListener("click", function() {
    if(input.value > 18) {
        h4.innerText = "you can drink";
    } else {
        h4.innerText = "you’re too young";
    }
});