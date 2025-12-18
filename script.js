function getSidebar() {
  return document.querySelector('.sidebar');
}

function setMenuA11y(isOpen) {
  const sidebar = getSidebar();
  if (sidebar) sidebar.setAttribute('aria-hidden', String(!isOpen));

  const openBtn = document.querySelector('.menu-button .icon-button');
  if (openBtn) openBtn.setAttribute('aria-expanded', String(isOpen));
}

function showSidebar() {
  const sidebar = getSidebar();
  if (!sidebar) return;

  sidebar.classList.add('is-open');
  document.body.classList.add('sidebar-open');
  setMenuA11y(true);
}

function hideSidebar() {
  const sidebar = getSidebar();
  if (!sidebar) return;

  sidebar.classList.remove('is-open');
  document.body.classList.remove('sidebar-open');
  setMenuA11y(false);
}

// Close with Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideSidebar();
});

// Close when clicking outside the sidebar
document.addEventListener('click', (e) => {
  const sidebar = getSidebar();
  if (!sidebar || !sidebar.classList.contains('is-open')) return;

  const target = e.target;
  const clickedInsideSidebar = sidebar.contains(target);
  const clickedMenuButton =
    target && target.closest ? Boolean(target.closest('.menu-button')) : false;
  if (!clickedInsideSidebar && !clickedMenuButton) hideSidebar();
});

// If the user resizes back to desktop, ensure the mobile sidebar is closed
window.addEventListener('resize', () => {
  if (window.innerWidth > 800) hideSidebar();
});

// Initialize a11y state on load
setMenuA11y(false);

