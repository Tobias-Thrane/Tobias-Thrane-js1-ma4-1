const url = "https://api.rawg.io/api/games";

async function getGame() {
    const res = await fetch(url);
    const games = await res.json();

    getName(games.results);
}

getGame();

function getName(games) {

    const addGames = document.querySelector(".results");
    console.log(addGames);
    let html = "";

    for (let i = 0; i < games.length; i++) {
    
    html += `<div>
                
                <h2>${games[i].name}</h2>
                <img src=${games[i].background_image} alt=${games[i].name} />
            </div>`;
    }

    addGames.innerHTML = html;
}
