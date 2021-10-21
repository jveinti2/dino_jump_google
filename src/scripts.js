const player = document.getElementById('player');


//Agregar y remover clase de salto
document.addEventListener('click', function () {
    player.classList.add('player_jump');
})
player.addEventListener('animationend', () => {
    player.classList.remove('player_jump');
  });

  