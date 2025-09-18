const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('navUl');
const button = document.getElementById("button-navbar-rules");
const box = document.getElementById("rulesBox");

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});


document.getElementById("button-navbar-contact").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
});

button.addEventListener("click", function () {
  if (box.style.display === "none") {
    box.style.display = "block";
    button.textContent = "Göm texten";
  } else {
    box.style.display = "none";
    button.textContent = "Klicka mig";
  }
});

const images = [
    "images/home.png",
    "images/home1.png",
    "images/home2.png", 
    "images/home3.png"
];

let currentIndex = 0;

const card = document.querySelector(".card-button-home");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateBackground() {
  card.style.backgroundImage = `url('${images[currentIndex]}')`;
}


prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateBackground();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackground();
});
