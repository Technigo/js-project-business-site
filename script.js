document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden"); // Växlar mellan att visa/gömma menyn
  });
});
