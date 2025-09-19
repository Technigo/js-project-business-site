// Grab elements
const header = document.querySelector(".header");
const toggle = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");

// Toggle menu on button click
toggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("header--open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when a link is clicked (on mobile)
nav.addEventListener("click", (e) => {
  if (e.target.matches(".header__nav-link")) {
    header.classList.remove("header--open");
    toggle.setAttribute("aria-expanded", "false");
  }
});
