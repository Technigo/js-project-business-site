document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu functionality
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('open');
  });

  // Dark mode toggle elements
  const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
  const darkModeToggleDesktop = document.getElementById('dark-mode-toggle-desktop');
  const instaIcon = document.querySelector('.instagram-icon');

  // Function to update the UI based on dark mode state
  function updateDarkModeUI(isDark) {
    if (isDark) {
      document.body.classList.add('dark-mode');
      if (darkModeToggleMobile) darkModeToggleMobile.src = 'sunlight.svg';
      if (darkModeToggleDesktop) darkModeToggleDesktop.src = 'sunlight.svg';
      if (instaIcon) instaIcon.src = 'insta_dark.svg';
    } else {
      document.body.classList.remove('dark-mode');
      if (darkModeToggleMobile) darkModeToggleMobile.src = 'moon.svg';
      if (darkModeToggleDesktop) darkModeToggleDesktop.src = 'moon.svg';
      if (instaIcon) instaIcon.src = 'insta_light.svg';
    }
  }

  // Check and apply dark mode setting from localStorage
  let darkModeEnabled = localStorage.getItem('darkMode') === 'true';
  updateDarkModeUI(darkModeEnabled);

  // Toggle dark mode and save the setting in localStorage
  function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;
    localStorage.setItem('darkMode', darkModeEnabled);
    updateDarkModeUI(darkModeEnabled);
  }

  if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener('click', toggleDarkMode);
  }
  if (darkModeToggleDesktop) {
    darkModeToggleDesktop.addEventListener('click', toggleDarkMode);
  }
});