const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
