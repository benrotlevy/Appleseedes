const check = document.querySelector("input");
const img = document.querySelector("img");

check.addEventListener("input", (event) => {
    if(event.target.checked) {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
})
