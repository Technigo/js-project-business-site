// Mobile Navigation
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

const hamburgerButton = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburgerButton.classList.toggle('active');
    hamburgerButton.setAttribute('aria-expanded', 
        navLinks.classList.contains('active'));
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    hamburgerButton.classList.remove('active');
    hamburgerButton.setAttribute('aria-expanded', 'false');
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check localStorage first, then system preference
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '⚫️';
} else if (storedTheme === 'light') {
    document.body.removeAttribute('data-theme');
    themeToggle.textContent = '🟡';
} else if (prefersDarkScheme.matches) {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '⚫️';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggle.textContent = '🟡';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '⚫️';
        localStorage.setItem('theme', 'dark');
    }
});

// Form Handling
const form = document.getElementById('contactForm');
if (form) { // Only run form code if we're on the contact page
    const popup = document.querySelector('.popup');
    const popupOverlay = document.querySelector('.popup-overlay');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        popup.classList.add('show');
        popupOverlay.classList.add('show');
        
        setTimeout(() => {
            popup.classList.remove('show');
            popupOverlay.classList.remove('show');
            form.submit();
        }, 3000);
    });

    // Close popup when clicking overlay
    if (popupOverlay) {
        popupOverlay.addEventListener('click', () => {
            popup.classList.remove('show');
            popupOverlay.classList.remove('show');
        });
    }
}