
/**
 * De-News Website JavaScript
 */
(function() {
    'use strict';

    // Config and constants I use throughout the app
    const CONFIG = {
        THEMES: {
            LIGHT: 'light',
            DARK: 'dark'
        },
        STORAGE_KEY: 'theme',
        CSS_CLASSES: {
            LIGHT_MODE: 'light-mode',
            MODAL_HIDE: 'hide',
            NAV_OPEN: 'open',
            HAMBURGER_ACTIVE: 'active'
        }
    };

    // SVG icons for theme toggle
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

    // Helper functions to avoid repeating myself
    function getElementById(id, context = '') {
        const element = document.getElementById(id);
        if (!element) {
            console.error(`${context}: Element with ID '${id}' not found`);
        }
        return element;
    }

    function getElement(selector, context = '') {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`${context}: Element with selector '${selector}' not found`);
        }
        return element;
    }

    function addEventListenerSafe(element, event, handler, context = '') {
        if (!element) {
            console.error(`${context}: Cannot add '${event}' listener - element is null`);
            return;
        }
        element.addEventListener(event, handler);
    }

    // Theme toggle functionality
    const ThemeToggle = {
        init() {
            this.themeToggle = getElementById('theme-toggle', 'Theme Toggle');
            this.themeIcon = getElementById('theme-icon', 'Theme Toggle');
            this.body = document.body;
            
            if (!this.themeToggle || !this.themeIcon) return;

            this.applyTheme(this.getSavedTheme());
            addEventListenerSafe(this.themeToggle, 'click', () => this.toggleTheme(), 'Theme Toggle');
        },

        getSavedTheme() {
            return localStorage.getItem(CONFIG.STORAGE_KEY) || CONFIG.THEMES.DARK;
        },

        applyTheme(theme) {
            const isLight = theme === CONFIG.THEMES.LIGHT;
            
            this.body.classList.toggle(CONFIG.CSS_CLASSES.LIGHT_MODE, isLight);
            this.themeIcon.innerHTML = isLight ? SVG_ICONS.MOON : SVG_ICONS.SUN;
            
            const label = isLight ? 'Switch to dark mode' : 'Switch to light mode';
            this.themeToggle.setAttribute('aria-label', label);
            
            localStorage.setItem(CONFIG.STORAGE_KEY, theme);
        },

        toggleTheme() {
            const currentTheme = this.body.classList.contains(CONFIG.CSS_CLASSES.LIGHT_MODE) 
                ? CONFIG.THEMES.LIGHT 
                : CONFIG.THEMES.DARK;
            const newTheme = currentTheme === CONFIG.THEMES.LIGHT 
                ? CONFIG.THEMES.DARK 
                : CONFIG.THEMES.LIGHT;
            this.applyTheme(newTheme);
        }
    };

    // Mobile navigation handling
    const MobileNavigation = {
        init() {
            this.menuToggle = getElementById('menu-toggle', 'Mobile Navigation');
            this.navMobile = getElement('.nav-mobile', 'Mobile Navigation');
            this.hamburger = getElement('.hamburger', 'Mobile Navigation');
            
            if (!this.menuToggle || !this.navMobile || !this.hamburger) return;

            this.setupEventListeners();
            this.menuToggle.style.display = 'none'; // Hide the checkbox
        },

        setupEventListeners() {
            // Main hamburger click
            addEventListenerSafe(this.hamburger, 'click', (e) => {
                e.preventDefault();
                this.toggle();
            }, 'Mobile Navigation');

            // Close menu when clicking nav links
            const navLinks = this.navMobile.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                addEventListenerSafe(link, 'click', () => this.close(), 'Mobile Navigation');
            });

            // Close when clicking outside menu
            addEventListenerSafe(document, 'click', (e) => {
                const isClickInside = this.navMobile.contains(e.target) || this.hamburger.contains(e.target);
                if (!isClickInside && this.isOpen()) {
                    this.close();
                }
            }, 'Mobile Navigation');

            // Close with Escape key
            addEventListenerSafe(document, 'keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen()) {
                    this.close();
                    this.hamburger.focus();
                }
            }, 'Mobile Navigation');
        },

        isOpen() {
            return this.navMobile.classList.contains(CONFIG.CSS_CLASSES.NAV_OPEN);
        },

        toggle() {
            this.isOpen() ? this.close() : this.open();
        },

        open() {
            this.navMobile.classList.add(CONFIG.CSS_CLASSES.NAV_OPEN);
            this.hamburger.classList.add(CONFIG.CSS_CLASSES.HAMBURGER_ACTIVE);
            this.hamburger.setAttribute('aria-expanded', 'true');
            this.navMobile.setAttribute('aria-hidden', 'false');
        },

        close() {
            this.navMobile.classList.remove(CONFIG.CSS_CLASSES.NAV_OPEN);
            this.hamburger.classList.remove(CONFIG.CSS_CLASSES.HAMBURGER_ACTIVE);
            this.hamburger.setAttribute('aria-expanded', 'false');
            this.navMobile.setAttribute('aria-hidden', 'true');
        }
    };

    // Modal handling for sign in/up
    const AuthModal = {
        init() {
            this.modalBtn = getElementById('header-auth-modal-btn', 'Auth Modal');
            this.mobileModalBtn = getElementById('mobile-auth-modal-btn', 'Mobile Auth Modal');
            this.modal = getElementById('header-auth-modal', 'Auth Modal');
            this.modalClose = getElementById('header-auth-modal-close', 'Auth Modal');
            
            if (!this.modalBtn || !this.modal || !this.modalClose) return;

            this.setupEventListeners();
        },

        setupEventListeners() {
            addEventListenerSafe(this.modalBtn, 'click', () => this.open(), 'Auth Modal');
            
            // Handle mobile button if it exists
            if (this.mobileModalBtn) {
                addEventListenerSafe(this.mobileModalBtn, 'click', () => this.open(), 'Mobile Auth Modal');
            }
            
            addEventListenerSafe(this.modalClose, 'click', () => this.close(), 'Auth Modal');
            
            // Close when clicking outside modal
            addEventListenerSafe(this.modal, 'click', (e) => {
                if (e.target === this.modal) this.close();
            }, 'Auth Modal');

            // Close with Escape key
            addEventListenerSafe(document, 'keydown', (e) => {
                if (e.key === 'Escape' && !this.modal.classList.contains(CONFIG.CSS_CLASSES.MODAL_HIDE)) {
                    this.close();
                }
            }, 'Auth Modal');
        },

        open() {
            this.modal.classList.remove(CONFIG.CSS_CLASSES.MODAL_HIDE);
            this.modal.style.display = 'flex';
            this.modal.setAttribute('aria-hidden', 'false');
            
            // Focus first input for better UX
            const firstInput = this.modal.querySelector('input');
            if (firstInput) firstInput.focus();
        },

        close() {
            this.modal.classList.add(CONFIG.CSS_CLASSES.MODAL_HIDE);
            this.modal.style.display = 'none';
            this.modal.setAttribute('aria-hidden', 'true');
            this.modalBtn.focus(); // Return focus to button
        }
    };

    // Hamburger accessibility improvements
    const HamburgerAccessibility = {
        init() {
            this.menuToggle = getElementById('menu-toggle', 'Hamburger Accessibility');
            this.hamburgerLabel = getElementById('hamburger-label', 'Hamburger Accessibility');
            
            if (!this.menuToggle || !this.hamburgerLabel) return;

            this.updateAria();
            addEventListenerSafe(this.menuToggle, 'change', () => this.updateAria(), 'Hamburger Accessibility');
        },

        updateAria() {
            const isOpen = this.menuToggle.checked;
            const label = isOpen ? 'Close mobile menu' : 'Open mobile menu';
            this.hamburgerLabel.setAttribute('aria-label', label);
        }
    };

    // Initialize everything when page loads
    function initializeApp() {
        try {
            ThemeToggle.init();
            MobileNavigation.init();
            AuthModal.init();
            HamburgerAccessibility.init();
            
            console.log('De-News app initialized successfully');
        } catch (error) {
            console.error('Error initializing De-News app:', error);
        }
    }

    // Start app when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }

})();
