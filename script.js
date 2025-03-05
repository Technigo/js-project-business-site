const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');

const hamburgerMenu = document.querySelector('.hamburger-menu');


hamburgerMenuIcon.addEventListener('click', () => {
  hamburgerMenuIcon.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');


  // Toggle scroll prevention
  if (hamburgerMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden'; // Disable scroll
  } else {
    document.body.style.overflow = ''; // Enable scroll
  }
});