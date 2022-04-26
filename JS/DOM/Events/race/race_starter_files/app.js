const player1Steps = document.querySelectorAll("#player1-race td");
const player2Steps = document.querySelectorAll("#player2-race td");
// const hr = document.querySelector("hr");
const restart = document.createElement("button");
restart.innerText = "restart game";
restart.classList.add("restart");
const h1 = document.createElement("h1");

let indexPlayer1;
let indexPlayer2;
let gameOver = false;

window.addEventListener("keyup", (event) => {
    if(!gameOver) {
        if(event.key === "m") {
            let found = false;
            player1Steps.forEach((td, i) => {
                if(found) {
                    td.classList.add("active");
                    indexPlayer1 = i;
                    found = false;
                    if(td.classList.contains("finish")) {
                        gameOver = true;
                        h1.innerText = "red car won!!!!";
                        h1.style.color = "red";
                        document.body.appendChild(h1);
                        document.body.appendChild(restart);
                    }
                } else if(td.classList.contains("active")) {
                    found = true;
                    td.classList.remove("active");
                }
            });
        }
    
        if(event.key === "z") {
            let found = false;
            player2Steps.forEach((td, i) => {
                if(found) {
                    td.classList.add("active");
                    indexPlayer2 = i;
                    found = false;
                    if(td.classList.contains("finish")) {
                        gameOver = true;
                        h1.innerText = "orange car won!!!!";
                        h1.style.color = "orange";
                        document.body.appendChild(h1);
                        document.body.appendChild(restart);
                    }
                } else if(td.classList.contains("active")) {
                    found = true;
                    td.classList.remove("active");
                }
            });
        }
    }
});

restart.addEventListener("click", ()=> {
    gameOver = false;
    player1Steps[indexPlayer1].classList.remove("active");
    player1Steps[0].classList.add("active");
    player2Steps[indexPlayer2].classList.remove("active");
    player2Steps[0].classList.add("active");
    restart.remove();
    h1.remove();
})