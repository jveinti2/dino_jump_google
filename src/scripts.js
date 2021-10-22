const player = document.getElementById('player');

//Agregar y remover clase de salto
document.addEventListener('click', function () {
    player.classList.add('player_jump');
})
player.addEventListener('animationend', () => {
    player.classList.remove('player_jump');
});

//Funcionalidad del score//

let score = 0;

setInterval(() => {
    score++;
    document.getElementById('score').innerText = score;
}, 1000);