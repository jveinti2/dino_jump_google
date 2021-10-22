//Declaracion de variables
const player = document.getElementById('player');
const cactus = document.getElementById('cactus');
const background = document.getElementById('background');
const buttonPlayStop = document.getElementById("buttonPlayStop");
const restartButton = document.getElementById("restartGame");
let score = 0;
let setIntertval;

document.addEventListener('click', function () {
    player.classList.add('player_jump');
})
player.addEventListener('animationend', () => {
    player.classList.remove('player_jump');
});

setIntertval = setInterval(() => {
    score++;
    document.getElementById('score').innerText = score;
}, 1000);

function stopAnimation() {
    player.style.animationPlayState = "paused";
    cactus.style.animationPlayState = "paused";
    background.style.animationPlayState = "paused";
}
function stopScore() {
    clearInterval(setIntertval);
}
function stopGame () {
    stopAnimation();
    stopScore();
}

function resumeAnimation () {
    player.style.animationPlayState = "running";
    cactus.style.animationPlayState = "running";
    background.style.animationPlayState = "running";
   
}
function resumeScore() {
    setIntertval = setInterval(() => {
        score++;
        document.getElementById('score').innerText = score;
    }, 1000);
}
function resumeGame() {
    resumeAnimation();
    resumeScore();
}



buttonPlayStop.addEventListener('click', () => {
    if (buttonPlayStop.classList.contains("play")){
        resumeGame();
    }
    else {
        stopGame();
    }
    buttonPlayStop.classList.toggle("play");
})

restartButton.addEventListener("click", restartGame);

function restartGame() {
    score = 0;
}


