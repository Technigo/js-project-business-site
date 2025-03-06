//Open and close hamburger menu
const hamburgerMenuClosed = document.querySelector(".hamburger-menu-closed");
const hamburgerMenuOpen = document.querySelector(".hamburger-menu-open");

//Open hamburger menu
hamburgerMenuClosed.addEventListener("click", () => {
  hamburgerMenuClosed.classList.toggle("active");
  hamburgerMenuOpen.classList.toggle("active");
});

//Close hamburger menu
hamburgerMenuOpen.addEventListener("click", () => {
  hamburgerMenuOpen.classList.toggle("active");
  hamburgerMenuClosed.classList.toggle("active");
});

