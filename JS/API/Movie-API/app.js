const search = document.querySelector("button");
const input = document.querySelector("input");
input.focus();
const APIKey = "7a552c7";

search.addEventListener("click", importGithubProfile);
input.addEventListener("keypress", (event) => {if(event.key === "Enter") importGithubProfile(event)});

async function importGithubProfile(event) {
    try {
        if(input.value) {
            const prom = await fetch(`https://www.omdbapi.com/?t=${input.value.split(" ").join("+")}&apikey=${APIKey}`);
            const data = await prom.json();
            if(data.Error) {
                throw data.Error;
            }
            createCard(data.Poster, data.Title, data.Plot, data.Genre, data.Year, data.Actors, data.Director, data.Ratings);
            input.value = "";
            input.focus();
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

function createCard(posterUrl, title, plot, genre, year, actors, director, ratings) {
    let allRatings = ``;
    for(let rating of ratings) {
        allRatings += `${rating.Source} : ${rating.Value} <br>`;
    }
    const resContainer = document.querySelector(".res-container");
    if(resContainer.innerHTML) {
        resContainer.innerHTML = "";
    }
    const div = document.createElement("div");
    let output = `
        <h2>${title} ${year}</h2>
        <img src=${posterUrl}></img>
        <h2>Director: ${director}</h2>
        <h2>Actors: ${actors}</h2>
        <h4>${allRatings}</h2>
        <h3>${plot}</h3>`;
    div.innerHTML = output;
    resContainer.append(div);
}