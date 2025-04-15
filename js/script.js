document.getElementById('menuIcon').addEventListener('click', function () {
  const navLinks = document.getElementById('navLinks');
  const menuIcon = document.getElementById('menuIcon');

  navLinks.classList.toggle('active');

  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-times');
});
