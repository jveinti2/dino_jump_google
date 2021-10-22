const player = document.getElementById('player');

<<<<<<< HEAD

//Agregar y remover clase de salto
document.addEventListener('click', function () {
    player.classList.add('player_jump');
})
player.addEventListener('animationend', () => {
    player.classList.remove('player_jump');
});

  
=======
document.addEventListener('click', function () {
    player.classList.add('player_jump');
})

player.addEventListener('animationend', () => {
    player.classList.remove('player_jump');
  });
>>>>>>> b9bc6d23528fc140fb4bfb4b989cd468323bac40
