
// Keep this 'use strict' here. It helps me catch silly mistakes.
'use strict';

// --- MY GLOBAL VARIABLES ---
// Grabbing all the elements I need to work with right at the top.

// Theme Toggle Elements
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Mobile Navigation Elements
const menuToggleCheckbox = document.getElementById('menu-toggle');
const mobileNav = document.querySelector('.nav-mobile');
const hamburgerButton = document.querySelector('.hamburger');
const hamburgerLabel = document.getElementById('hamburger-label');

// Modal Elements
const modalOpenButton = document.getElementById('header-auth-modal-btn');
const mobileModalOpenButton = document.getElementById('mobile-auth-modal-btn');
const authModal = document.getElementById('header-auth-modal');
const modalCloseButton = document.getElementById('header-auth-modal-close');

// --- MY CONFIG & ICONS ---
// Storing constants and SVG strings here so I don't have to repeat them.
const THEME_STORAGE_KEY = 'theme';
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const SVG_ICONS = {
    MOON: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    SUN: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
        <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
        <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
        <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
        <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
    </svg>`
};


// --- THEME TOGGLE FUNCTIONS ---

/**
 * Get the theme I saved in localStorage.
 * Default to dark mode if nothing's there.
 * This is the part that makes the theme choice stick around.
 */
function getSavedTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || DARK_THEME;
}

/**
 * This function does all the theme-switching work:
 * - Toggles the 'light-mode' class on the body.
 * - Swaps the sun/moon icon.
 * - Updates the aria-label for screen readers.
 * - Saves the choice back to localStorage.
 */
function applyTheme(theme) {
    const isLight = theme === LIGHT_THEME;
    
    body.classList.toggle('light-mode', isLight);
    themeIcon.innerHTML = isLight ? SVG_ICONS.MOON : SVG_ICONS.SUN;
    
    const label = isLight ? 'Switch to dark mode' : 'Switch to light mode';
    themeToggleButton.setAttribute('aria-label', label);
    
    localStorage.setItem(THEME_STORAGE_KEY, theme);
}

/**
 * The main handler for the theme toggle button click.
 */
function handleThemeToggle() {
    const currentTheme = body.classList.contains('light-mode') ? LIGHT_THEME : DARK_THEME;
    const newTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    applyTheme(newTheme);
}


// --- MOBILE NAVIGATION FUNCTIONS ---

/**
 * Just a quick check to see if the mobile nav is open.
 */
function isMobileNavOpen() {
    return mobileNav.classList.contains('open');
}

/**
 * Opens the mobile nav and handles the ARIA attributes.
 */
function openMobileNav() {
    mobileNav.classList.add('open');
    hamburgerButton.classList.add('active');
    hamburgerButton.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
}

/**
 * Closes the mobile nav and resets the ARIA attributes.
 */
function closeMobileNav() {
    mobileNav.classList.remove('open');
    hamburgerButton.classList.remove('active');
    hamburgerButton.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
}

/**
 * This runs when I click the hamburger button.
 */
function handleMobileNavToggle(event) {
    // I need to prevent the default link behavior here.
    event.preventDefault();
    if (isMobileNavOpen()) {
        closeMobileNav();
    } else {
        openMobileNav();
    }
}


// --- AUTH MODAL FUNCTIONS ---

/**
 * Shows the sign-in modal.
 */
function openAuthModal() {
    authModal.classList.remove('hide');
    authModal.style.display = 'flex';
    authModal.setAttribute('aria-hidden', 'false');
    
    // Move the cursor to the first input, it's better for UX.
    const firstInput = authModal.querySelector('input');
    if (firstInput) {
        firstInput.focus();
    }
}

/**
 * Hides the sign-in modal.
 */
function closeAuthModal() {
    authModal.classList.add('hide');
    authModal.style.display = 'none';
    authModal.setAttribute('aria-hidden', 'true');
    // Put focus back on the button that opened it. Good for keyboard navigation.
    modalOpenButton.focus();
}


// --- GLOBAL EVENT HANDLERS ---

/**
 * This handles clicks anywhere on the page.
 * I use it to close the mobile menu if I click outside of it.
 */
function handleDocumentClick(event) {
    const isClickInsideNav = mobileNav.contains(event.target) || hamburgerButton.contains(event.target);
    if (!isClickInsideNav && isMobileNavOpen()) {
        closeMobileNav();
    }
}

/**
 * This handles key presses.
 * Mainly for closing the menu or modal with the 'Escape' key.
 */
function handleDocumentKeyDown(event) {
    if (event.key === 'Escape') {
        if (isMobileNavOpen()) {
            closeMobileNav();
            hamburgerButton.focus();
        }
        if (!authModal.classList.contains('hide')) {
            closeAuthModal();
        }
    }
}


// --- INITIALIZATION ---

/**
 * My main function to kick everything off once the page is ready.
 * I'll set up all my event listeners in here.
 */
function initializeApp() {
    // --- Set up Theme Toggle ---
    if (themeToggleButton) {
        const initialTheme = getSavedTheme();
        applyTheme(initialTheme);
        themeToggleButton.addEventListener('click', handleThemeToggle);
    }

    // --- Set up Mobile Navigation ---
    if (hamburgerButton && mobileNav) {
        // Hiding the checkbox since I'm controlling the menu with JS.
        menuToggleCheckbox.style.display = 'none';
        hamburgerButton.addEventListener('click', handleMobileNavToggle);

        // Make sure the menu closes when I click a link inside it.
        const navLinks = mobileNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });
    }

    // --- Set up Auth Modal ---
    if (modalOpenButton && authModal && modalCloseButton) {
        modalOpenButton.addEventListener('click', openAuthModal);
        modalCloseButton.addEventListener('click', closeAuthModal);

        // Don't forget the mobile button.
        if (mobileModalOpenButton) {
            mobileModalOpenButton.addEventListener('click', openAuthModal);
        }

        // This is for closing the modal by clicking the background overlay.
        authModal.addEventListener('click', (event) => {
            if (event.target === authModal) {
                closeAuthModal();
            }
        });
    }

    // --- Set up Global Listeners ---
    // For closing things with outside clicks or the Escape key.
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleDocumentKeyDown);

    console.log('De-News app (Simplified Version) initialized successfully');
}

// --- START THE APP ---
// I have to wait for the HTML to be fully loaded before I can find elements.
// 'DOMContentLoaded' is the event that tells me the page is ready.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // If the page is already loaded, just run the app.
    initializeApp();
}

