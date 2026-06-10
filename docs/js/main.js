const toggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const iconMenu = toggle.querySelector('.icon-menu');
const iconClose = toggle.querySelector('.icon-close');

toggle.addEventListener('click', () => {
  const isOpen = !mobileNav.hidden;
  mobileNav.hidden = isOpen;
  toggle.setAttribute('aria-expanded', String(!isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  iconMenu.style.display = isOpen ? '' : 'none';
  iconClose.style.display = isOpen ? 'none' : '';
});

// Close mobile nav when a link is clicked
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    iconMenu.style.display = '';
    iconClose.style.display = 'none';
  });
});
