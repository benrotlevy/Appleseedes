const main = document.querySelectorAll("ul li ul li");
main[1].innerText = "sub main title";

const newTitle = document.createElement("li");
newTitle.innerText = "sub title 4";

const ul2 = document.querySelector("ul li ul")
ul2.appendChild(newTitle);

const list = document.querySelectorAll("ul li");
list[7].remove();

document.title = "master of the dom";

document.querySelector("p").innerText = "i am a champion";
