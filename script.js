// Load Confetti JS from CDN
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
document.head.appendChild(script);

function launchConfetti() {
  playMusic();
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function revealCode() {
  document.getElementById('code-box').style.display = 'block';
}

function copyCode() {
  const code = document.getElementById('gift-code').innerText;
  navigator.clipboard.writeText(code).then(() => {
    alert("Code copied to clipboard!");
  });
}

function playMusic() {
  const music = document.getElementById("birthday-music");
  if (music) {
    music.play().catch(err => {
      console.log("Autoplay blocked. User interaction required.");
    });
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}
