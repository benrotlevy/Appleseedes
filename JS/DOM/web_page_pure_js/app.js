document.body.style.margin = "0";
document.body.style.height = "98vh";
document.body.style.background = "#9ad888";
const header = document.createElement("header");
document.body.appendChild(header);
header.style.height = "5rem";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.background = "pink";
const arr = ["home", "about", "contact"];
for(let word of arr) {
    const button = document.createElement("button");
    button.style.padding = "0 3rem";
    button.style.margin = "0 0.3rem";
    button.style.fontSize = "2rem";
    button.style.border = "none";
    button.innerText = word;
    header.appendChild(button);
    console.log(button);
}
const h1 = document.createElement("h1");
h1.innerText = "This is pure JS website!!!";
document.body.appendChild(h1);
h1.style.margin = "10% 0";
h1.style.textAlign = "center";
h1.style.color = "blue";
h1.style.fontSize = "8rem";

