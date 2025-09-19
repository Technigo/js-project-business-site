/**
 * De-News JavaScript Module
 * Handles theme toggling, mobile navigation, modal interactions, and accessibility features
 * @author De-News Team
 * @version 2.0
 */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ===========================================
    // HAMBURGER MENU ACCESSIBILITY
    // ===========================================
    
    /**
     * Updates the aria-label for the hamburger menu based on its state
     */
    function initializeHamburgerAccessibility() {
        const menuToggle = document.getElementById('menu-toggle');
        const hamburgerLabel = document.getElementById('hamburger-label');
        
        if (!menuToggle || !hamburgerLabel) {
            console.warn('Hamburger menu elements not found');
            return;
        }

        function updateHamburgerAria() {
            const isOpen = menuToggle.checked;
            const label = isOpen ? 'Close mobile menu' : 'Open mobile menu';
            hamburgerLabel.setAttribute('aria-label', label);
        }

        // Set initial state and add event listener
        updateHamburgerAria();
        menuToggle.addEventListener('change', updateHamburgerAria);
    }

    // ===========================================
    // MODAL FUNCTIONALITY
    // ===========================================
    
    /**
     * Initializes the authentication modal functionality
     */
    function initializeAuthModal() {
        const modalBtn = document.getElementById('footer-auth-modal-btn');
        const modal = document.getElementById('footer-auth-modal');
        const modalClose = document.getElementById('footer-auth-modal-close');
        
        if (!modalBtn || !modal || !modalClose) {
            console.warn('Modal elements not found');
            return;
        }

        /**
         * Opens the authentication modal
         */
        function openModal() {
            modal.classList.remove('hide');
            modal.style.display = 'flex';
            modal.setAttribute('aria-hidden', 'false');
            
            // Focus management for accessibility
            const firstInput = modal.querySelector('input');
            if (firstInput) {
                firstInput.focus();
            }
        }

        /**
         * Closes the authentication modal
         */
        function closeModal() {
            modal.classList.add('hide');
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            
            // Return focus to the button that opened the modal
            modalBtn.focus();
        }

        // Event listeners
        modalBtn.addEventListener('click', openModal);
        modalClose.addEventListener('click', closeModal);
        
        // Close modal when clicking outside content area
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && !modal.classList.contains('hide')) {
                closeModal();
            }
        });
    }

    // ===========================================
    // THEME TOGGLE FUNCTIONALITY
    // ===========================================
    
    /**
     * Initializes the dark/light theme toggle functionality
     */
    function initializeThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const body = document.body;
        
        if (!themeToggle || !themeIcon) {
            console.warn('Theme toggle elements not found');
            return;
        }

        // Theme constants
        const THEMES = {
            LIGHT: 'light',
            DARK: 'dark'
        };

        const ICONS = {
            MOON: '🌙',
            SUN: '🌞'
        };

        /**
         * Applies the specified theme to the page
         * @param {string} theme - The theme to apply ('light' or 'dark')
         */
        function applyTheme(theme) {
            const isLight = theme === THEMES.LIGHT;
            
            // Update body class
            body.classList.toggle('light-mode', isLight);
            
            // Update icon (moon for light mode, sun for dark mode)
            themeIcon.textContent = isLight ? ICONS.MOON : ICONS.SUN;
            
            // Update aria-label for accessibility
            const label = isLight ? 'Switch to dark mode' : 'Switch to light mode';
            themeToggle.setAttribute('aria-label', label);
            
            // Save preference to localStorage
            localStorage.setItem('theme', theme);
        }

        /**
         * Gets the saved theme preference or defaults to dark
         * @returns {string} The theme preference
         */
        function getSavedTheme() {
            return localStorage.getItem('theme') || THEMES.DARK;
        }

        /**
         * Toggles between light and dark themes
         */
        function toggleTheme() {
            const currentTheme = body.classList.contains('light-mode') ? THEMES.LIGHT : THEMES.DARK;
            const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
            applyTheme(newTheme);
        }

        // Initialize theme from saved preference
        const savedTheme = getSavedTheme();
        applyTheme(savedTheme);

        // Add event listener for theme toggle
        themeToggle.addEventListener('click', toggleTheme);
    }

    // ===========================================
    // MOBILE NAVIGATION
    // ===========================================
    
    /**
     * Initializes the mobile navigation functionality
     */
    function initializeMobileNavigation() {
        const menuToggle = document.getElementById('menu-toggle');
        const navMobile = document.querySelector('.nav-mobile');
        const hamburger = document.querySelector('.hamburger');
        
        if (!menuToggle || !navMobile || !hamburger) {
            console.warn('Mobile navigation elements not found');
            return;
        }

        // Hide the checkbox (controlled via JavaScript)
        menuToggle.style.display = 'none';

        /**
         * Toggles the mobile navigation menu
         */
        function toggleMobileMenu() {
            const isOpen = navMobile.classList.contains('open');
            
            navMobile.classList.toggle('open');
            hamburger.classList.toggle('active');
            menuToggle.checked = !isOpen;
            
            // Update aria attributes for accessibility
            const ariaExpanded = !isOpen;
            hamburger.setAttribute('aria-expanded', ariaExpanded);
            navMobile.setAttribute('aria-hidden', !ariaExpanded);
        }

        /**
         * Closes the mobile navigation menu
         */
        function closeMobileMenu() {
            navMobile.classList.remove('open');
            hamburger.classList.remove('active');
            menuToggle.checked = false;
            
            // Update aria attributes
            hamburger.setAttribute('aria-expanded', 'false');
            navMobile.setAttribute('aria-hidden', 'true');
        }

        // Set initial aria attributes
        hamburger.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');

        // Add click event to hamburger
        hamburger.addEventListener('click', toggleMobileMenu);

        // Close menu when navigation links are clicked
        const navLinks = navMobile.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInsideNav = navMobile.contains(event.target) || hamburger.contains(event.target);
            const isMenuOpen = navMobile.classList.contains('open');
            
            if (!isClickInsideNav && isMenuOpen) {
                closeMobileMenu();
            }
        });

        // Close menu with Escape key
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && navMobile.classList.contains('open')) {
                closeMobileMenu();
                hamburger.focus(); // Return focus to hamburger button
            }
        });
    }

    // ===========================================
    // INITIALIZATION
    // ===========================================
    
    /**
     * Initialize all components when DOM is ready
     */
    function initializeApp() {
        try {
            initializeHamburgerAccessibility();
            initializeAuthModal();
            initializeThemeToggle();
            initializeMobileNavigation();
            
            console.log('De-News app initialized successfully');
        } catch (error) {
            console.error('Error initializing De-News app:', error);
        }
    }

    // Start the application
    initializeApp();
});