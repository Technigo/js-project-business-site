document.getElementById("hamburger").addEventListener("click", function () {
  let hamburger = document.getElementById("hamburger");
  let navMenu = document.getElementById("nav-menu");

  hamburger.classList.toggle("active");
  navMenu.classList.toggle("show");
});
