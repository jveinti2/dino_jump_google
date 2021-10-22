//Declaracion de variables
const player = document.getElementById('player');
const cactus = document.getElementById('cactus');
const background = document.getElementById('background');
const buttonPlayStop = document.getElementById("buttonPlayStop");

let score = 0;
let setIntertval;

//Funcionalidad de salto

document.addEventListener('click', function () {
    player.classList.add('player_jump');
})
player.addEventListener('animationend', () => {
    player.classList.remove('player_jump');
});


// Funcionalidad del boton play-paused//


buttonPlayStop.addEventListener('click', () => {
    if (buttonPlayStop.classList.contains("play")){
        resumeGame();
    }
    else {
        stopGame();
    }
    buttonPlayStop.classList.toggle("play");
})

// funcionalidad de stop&play-animation del juego
//Esta funcionalidad se le agrega al btn

function stopGame () {
    player.style.animationPlayState = "paused";
    cactus.style.animationPlayState = "paused";
    background.style.animationPlayState = "paused";
    clearInterval(setIntertval);
}

function resumeGame () {
    player.style.animationPlayState = "running";
    cactus.style.animationPlayState = "running";
    background.style.animationPlayState = "running";
    setIntertval = setInterval(() => {
        score++;
        document.getElementById('score').innerText = score;
    }, 1000);
}

//Funcionalidad del score//

setIntertval = setInterval(() => {
    score++;
    document.getElementById('score').innerText = score;
}, 1000);
