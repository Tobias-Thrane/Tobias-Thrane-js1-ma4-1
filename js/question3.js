const url = "https://api.rawg.io/api/games/4200";

async function changeGame() {
    const res = await fetch(url);
    const game = await res.json();
 
    console.log(game.background_image);
    
    const addName = document.querySelector("h1");
    console.log(addName);

    let html = "";

    html += `${game.name}`;

    addName.innerHTML = html;
    
    const addImg = document.querySelector(".image");
    
    console.log(addImg);

    let html1 = "";

    html1 += `<div class="image" style="background-image: url('https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg')"></div>`;

    addImg.innerHTML = html1;

    const addDes = document.querySelector(".description")

    let html2 = "";
    html2 += `${game.description}`;

    addDes.innerHTML = html2

}

changeGame();