// varibles
const item01Btn = document.getElementById("item01Btn");
const item02Btn = document.getElementById("item02Btn");
const item03Btn = document.getElementById("item03Btn");
const item04Btn = document.getElementById("item04Btn");
const item05Btn = document.getElementById("item05Btn");
const item06Btn = document.getElementById("item06Btn");
const item07Btn = document.getElementById("item07Btn");
const item08Btn = document.getElementById("item08Btn");
const item09Btn = document.getElementById("item09Btn");
const exitBtn = document.getElementById("exitBtn");
const popUpProduct = document.getElementById("popUpProduct");
const popUpTitle = document.getElementById("popUpTitle");


// Item name change and popup function
item01Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "Fulu Climbing";
};

item02Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "Rock Climbing";
};

item03Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "La Sportiva Tracer";
};

item04Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "Ripstop Voyger";
};

item05Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "Hiking Patrol";
};

item06Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "Peachell Technical";
};

item07Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "La Sportiva - Miura";
};

item08Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "La Sportiva Miura";
};

item09Btn.onclick = function () {
  popUpProduct.style.display = "block";
  popUpTitle.textContent = "La Sportiva Tarantula";
};

exitBtn.onclick = function () {
  popUpProduct.style.display = "none";
};


const shopBtn = document.getElementById("shopBtn");


// Shop button link
shopBtn.onclick = function () {
  window.location.reload();
};

const burgerBtn = document.getElementById("burger-button");
const burgerMenu = document.getElementById("burger-menu");
const burgerLine01 = document.getElementById("burger-line-01");
const burgerLine03 = document.getElementById("burger-line-03");

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