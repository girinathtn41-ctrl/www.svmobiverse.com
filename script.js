document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const year = document.getElementById('year');
  const themeToggle = document.querySelector('.theme-toggle');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = document.body.classList.contains('dark')
          ? 'fa-solid fa-sun'
          : 'fa-solid fa-moon';
      }
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
