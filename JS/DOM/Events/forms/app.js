const form = document.querySelector("form");
const name1 = document.querySelector("#name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");

const confirmation = document.createElement("div");
confirmation.classList.add("confirmation");

const btnConfirm = document.createElement("button");
btnConfirm.innerText = "confirm";
const btnChange = document.createElement("button");
btnChange.innerText = "change";

const h3 = document.createElement("h3");
h3.innerText = "congratulations you successfully sent this form";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    confirmation.innerText = 
    `name: ${name1.value}
    age: ${age.value}
    email: ${email.value}
    `;
    form.style.display = "none";
    document.body.appendChild(confirmation);
    confirmation.append(btnConfirm);
    confirmation.append(btnChange);
})

btnConfirm.addEventListener("click", () => {
    document.body.appendChild(h3);
})

btnChange.addEventListener("click", () => {
    confirmation.remove();
    h3.remove();
    form.style.display = "flex";
})