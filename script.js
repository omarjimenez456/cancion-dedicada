function crearCorazon() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤';

  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(crearCorazon, 800);



const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('audio');

let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    playBtn.textContent = "⏸ Pausar canción"; 
    isPlaying = true;
  } else {
    audio.pause();
    playBtn.textContent = "▶ Reproducir canción"; 
    isPlaying = false;
  }
});
