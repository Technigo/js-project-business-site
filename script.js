// Select the elements
const hamburgerBtn = document.getElementById("hamburger-menu");
const mobileNav = document.getElementById("mobile-nav");

// Toggle menu visibility when hamburger is clicked
hamburgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});