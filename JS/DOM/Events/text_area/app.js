const text = document.querySelector("textarea");
const btn = document.querySelector("button");
const warnning = document.createElement("h3");

btn.addEventListener("click", function() {
    if(text.value.length > 100) {
        // document.body.remove(warnning);
        warnning.remove();
    } else {
        document.body.appendChild(warnning);
        warnning.classList.add("alert");
        warnning.innerText = "you must enter at least 100 characters";
    }
});