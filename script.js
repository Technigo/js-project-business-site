// Hamburger menu functionality

const hamburgerMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

// Pop-up card containing form for newsletter sign-up

let popupClosed = false;

const closeButton = document.getElementById('close-popup');
  const overlay = document.getElementById('overlay');
  const popupCard = document.getElementById('popup-card');

window.addEventListener('scroll', function() {
  const hrElement = document.querySelector('hr');

  if (!popupClosed && window.scrollY + window.innerHeight > hrElement.offsetTop) {
    overlay.classList.add('show-overlay');
    popupCard.classList.add('show-popup');
  }
});

closeButton.addEventListener('click', function() {
  overlay.classList.remove('show-overlay');
  popupCard.classList.remove('show-popup');
  popupClosed = true;
});

overlay.addEventListener('click', function() {
  overlay.classList.remove('show-overlay');
  popupCard.classList.remove('show-popup');
  popupClosed = true;
});