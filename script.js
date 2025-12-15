//hamburger menu
/*finds the button element with class .hamburger,
 the <nav> element with the ID primary-nav(main menu) and
  finds the <i> element inside the hamburger button (the Font Awesome icon)*/
const hamburgerBtn = document.querySelector('.hamburger-menu');
const nav = document.getElementById('primary-nav');
const icon = hamburgerBtn.querySelector('i');

/*adds a click event listener to the hamburger button
when clicked, it toggles the 'active' class on the nav element to show/hide the menu*/
hamburgerBtn.addEventListener('click', () => {
  nav.classList.toggle('active');

  // updates the aria-expanded attribute for accessibility
  const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true' || false;
  hamburgerBtn.setAttribute('aria-expanded', !expanded);

  // Toggles the icon between a hamburger (fa-bars) and a close (fa-xmark) icon
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});