const container = document.querySelector(".container");
const box = document.querySelector(".box");
const msg = document.querySelector("h3");
const h2 = document.querySelector("h2");
const keys = document.querySelector(".keys");
const btn = document.createElement("button");
btn.innerText = "yes";

let randomLetter = random();
console.log(randomLetter);

let chosenLetters = "";
let gameOver = false;

window.addEventListener("keyup", (event) => {
    if(!gameOver) {
        if(event.keyCode > 64 && event.keyCode < 91) {
            if(event.key === randomLetter) {
                box.innerText = randomLetter;
                msg.innerText = "Right letter!"
                msg.style.color = "green";
                h2.innerText = "Would you like to play again?";
                keys.innerText = "";
                container.appendChild(btn);
                gameOver = true;
            } else if(chosenLetters.split("").includes(event.key)) {
                msg.innerText = `${event.key} has already been guessed!`;
                msg.style.color = "red";
            } else {
                chosenLetters += event.key;
                keys.innerText = chosenLetters.split("").join(",");
                msg.innerText = "nope, wrong letter"
                msg.style.color = "red";
            }
        } else {
            msg.innerText = "please enter a valid letter"
            msg.style.color = "red";
        }
    }
})

btn.addEventListener("click", () => {
    gameOver = false;
    randomLetter = random();
    console.log(randomLetter);
    chosenLetters = "";
    box.innerText = "?";
    msg.innerText = "Guess a letter";
    msg.style.color = "black";
    h2.innerText = "Keys guessed";
    btn.remove();
})

function random() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const random = Math.floor(Math.random() * letters.length);
    return letters[random];
}
