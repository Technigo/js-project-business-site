// varibles
const shopBtn = document.getElementById("shopBtn");
const burgerBtn = document.getElementById("burger-button");
const burgerMenu = document.getElementById("burger-menu");
const burgerLine01 = document.getElementById("burger-line-01");
const burgerLine03 = document.getElementById("burger-line-03");

// Shop button nav reload
shopBtn.onclick = function () {
  window.location.href = "shop.html";
};

// Burger nav button funcion
burgerBtn.onclick = function () {
  burgerMenu.classList.toggle("open");
  burgerBtn.style.color = burgerBtn.style.color === "gray" ? "black" : "gray";
  burgerLine01.classList.toggle("line-01");
  burgerLine03.classList.toggle("line-03");
};

// Darkmode toggle
const darkModeToggle = document.getElementById("dark-mode");
const body = document.getElementById("body");
const lightIcon = document.getElementById("light");
const darkIcon = document.getElementById("dark");

darkModeToggle.onclick = function () {
  body.classList.toggle("dark-mode");
  lightIcon.style.display = lightIcon.style.display === "block" ? "none" : "block";
  darkIcon.style.display = darkIcon.style.display === "none" ? "block" : "none";

};