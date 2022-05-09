const btn = document.querySelector("button");
let clicked = false;
btn.addEventListener("click", () => {
    if(!clicked) {
        clicked = true;
        const h3 = document.createElement("h3");
        const h1 = document.createElement("h1");
        fetch("https://api.jokes.one/jod").then(res => res.json()).then(res => {
            h1.innerText = res.contents.jokes[0].joke.title;
            document.body.append(h1);
            h3.innerText = res.contents.jokes[0].joke.text;
            document.body.append(h3);
        })
    }
})