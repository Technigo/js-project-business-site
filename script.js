// Find the hamburger icon
const hamMenu = document.querySelector(".ham-menu");
// Find the menu panel
const navMenu = document.querySelector(".nav-menu");

// When the hamburger icon is clicked
hamMenu.addEventListener("click", () => {
    // ...adds a class called "active" to the icon to change it to an "X".
    hamMenu.classList.toggle("active");
    // ...and add the "active" class to the menu to make it slide out.
    navMenu.classList.toggle("active");
});