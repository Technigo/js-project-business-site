const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

hamburgerBtn.onclick = () => {
  mobileMenu.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
  menuIcon.classList.toggle('active');
};
