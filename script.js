const hamburgerBtn = document.querySelector('.hamburger');
const nav = document.getElementById('primary-nav');
const icon = hamburgerBtn.querySelector('i');

hamburgerBtn.addEventListener('click', () => {
  nav.classList.toggle('active');

  const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true' || false;
  hamburgerBtn.setAttribute('aria-expanded', !expanded);

  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});