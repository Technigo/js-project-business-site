// Variable selectors
const getMenu = document.querySelector(".hamburger-icon")
const navMenu = document.querySelector(".nav-links")

// Hamburger menu
getMenu.addEventListener("click", () => {
  getMenu.classList.toggle("open")
  navMenu.classList.toggle("open")
})

