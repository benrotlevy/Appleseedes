const search = document.querySelector("button");
const input = document.querySelector("input");
input.focus();
const displayed = [];

search.addEventListener("click", importGithubProfile);
input.addEventListener("keypress", (event) => {if(event.key === "Enter") importGithubProfile(event)});

async function importGithubProfile(event) {
    try {
        if(input.value) {
            if(isNotDisplay(input.value)) {
                displayed.push(input.value);
                const prom = await fetch(`https://api.github.com/users/${input.value}`);
                const data = await prom.json();
                if(data.message) {
                    throw "broken url";
                }
                createCard(data.avatar_url, data.name, data.public_repos, data.html_url);
                input.value = "";
                input.focus();
            } else {
                throw "already displayed";
            }
        } else {
            throw "no input";
        }
    } catch (error) {
        if(error === "no input") {
            input.style.borderColor = "red";
        }
        console.log(error);
    }
}

function isNotDisplay(inputName) {
    for(let name of displayed) {
        if(name === inputName) {
            return false;
        }
    }
    return true;
}

function createCard(avatarUrl, name, repoNum, htmlUrl) {
    const resContainer = document.querySelector(".res-container");
    const div = document.createElement("div");
    let output = `<img src=${avatarUrl}></img>
        <h2>${name}</h2>
        <h3>Public Repos: ${repoNum}</h3>`;
    div.innerHTML = output;
    div.addEventListener("click", ()=>{window.open(htmlUrl);})
    resContainer.append(div);
}