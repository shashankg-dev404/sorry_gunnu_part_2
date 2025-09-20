function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  const toggle = document.getElementById('toggle-music');

  if (toggle && music) {
    toggle.addEventListener('click', () => {
      if (music.paused) {
        music.play();
        toggle.innerText = '🔈 Mute';
      } else {
        music.pause();
        toggle.innerText = '🔇 Unmute';
      }
    });
  }
});
