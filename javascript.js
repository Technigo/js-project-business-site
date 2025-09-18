document.addEventListener('DOMContentLoaded', function () {
	// Dynamic aria-label for hamburger menu
	const menuToggle = document.getElementById('menu-toggle');
	const hamburgerLabel = document.getElementById('hamburger-label');
	if (menuToggle && hamburgerLabel) {
		function updateHamburgerAria() {
			if (menuToggle.checked) {
				hamburgerLabel.setAttribute('aria-label', 'Close mobile menu');
			} else {
				hamburgerLabel.setAttribute('aria-label', 'Open mobile menu');
			}
		}
		menuToggle.addEventListener('change', updateHamburgerAria);
		updateHamburgerAria();
	}

	// Modal logic for footer sign in/up
	const modalBtn = document.getElementById('footer-auth-modal-btn');
	const modal = document.getElementById('footer-auth-modal');
	const modalClose = document.getElementById('footer-auth-modal-close');
	if (modalBtn && modal && modalClose) {
		modalBtn.addEventListener('click', function () {
			modal.classList.remove('hide');
			modal.style.display = 'flex';
		});
		modalClose.addEventListener('click', function () {
			modal.classList.add('hide');
			modal.style.display = 'none';
		});
		modal.addEventListener('click', function (e) {
			if (e.target === modal) {
				modal.classList.add('hide');
				modal.style.display = 'none';
			}
		});
	}

	// Hamburger menu slide-in animation
	const navMobile = document.querySelector('.nav-mobile');
	const hamburger = document.querySelector('.hamburger');

	// Theme toggle
	const themeToggle = document.getElementById('theme-toggle');
	const themeIcon = document.getElementById('theme-icon');
	const body = document.body;

	// Set initial theme from localStorage (switch icons: sun for dark, moon for light)
	if (localStorage.getItem('theme') === 'light') {
		body.classList.add('light-mode');
		if (themeIcon) themeIcon.textContent = '🌙';
	} else {
		if (themeIcon) themeIcon.textContent = '🌞';
	}

	if (themeToggle) {
		themeToggle.addEventListener('click', function () {
			body.classList.toggle('light-mode');
			const isLight = body.classList.contains('light-mode');
			// Switch icons: moon for light, sun for dark
			if (themeIcon) themeIcon.textContent = isLight ? '🌙' : '🌞';
			localStorage.setItem('theme', isLight ? 'light' : 'dark');
		});
	}

	if (menuToggle && navMobile && hamburger) {
		// Hide the default checkbox
		menuToggle.style.display = 'none';

		hamburger.addEventListener('click', function () {
			navMobile.classList.toggle('open');
			hamburger.classList.toggle('active');
		});

		// Optional: close menu when a link is clicked
		navMobile.querySelectorAll('.nav-link').forEach(link => {
			link.addEventListener('click', function () {
				navMobile.classList.remove('open');
				hamburger.classList.remove('active');
			});
		});
	}
});
