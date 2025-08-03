// Dropdown support on mobile/tablet (click) and nav toggle

document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Support dropdown open/close on mobile click (not hover)
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(item => {
  item.addEventListener('click', function (e) {
    // Don't bubble to menu parent
    if (window.innerWidth <= 680) {
      e.preventDefault();
      this.querySelector('.dropdown-menu').classList.toggle('show');
    }
  });
});

// On window resize, close the menu if switching to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 680) {
    document.querySelector('.nav-links').classList.remove('active');
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
  }
});