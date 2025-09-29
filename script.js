const navbar = document.getElementById('navbarLinks')

// Makes the sidebar open and close when clicking the buttons
function openSidebar() {
  navbar.classList.add('show')
}

function closeSidebar() {
  navbar.classList.remove('show')
}


// Overlay functionality to close the sidebar when clicking outside of it
function openSidebar() {
  document.querySelector('.nav-links').classList.add('show');
  document.body.classList.add('menu-open');
}

function closeSidebar() {
  document.querySelector('.nav-links').classList.remove('show');
  document.body.classList.remove('menu-open');
}

// Close sidebar when clicking on a navigation link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', closeSidebar);
});