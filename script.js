const scrollButton = document.getElementById('scrollButton');
const targetSection = document.getElementById('targetSection');
const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list1');

// click on button – sign up – scrolls to bottom of page 
scrollButton.addEventListener('click', () => {
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

// click on burger menu - show navigation list
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navList.classList.toggle('active');
});