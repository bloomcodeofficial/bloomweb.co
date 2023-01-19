// Adds a fixed class to the navbar element when the page has been scrolled down more than 300 pixels, and removes the fixed class when the user scrolls back up. It also adds an active class to the navbar when the user scrolls down past 400 pixels, but is scrolling up again, and removes the active class otherwise. The variable lastScrollY is being used to store the last scroll position. //

const navbar = document.querySelector('[bw-navbar="component"]');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (window.scrollY < lastScrollY && window.scrollY > 400) {
    navbar.classList.add('active-nav');
  } else {
    navbar.classList.remove('active-nav');
  }

  lastScrollY = window.scrollY;
});

// Toggle Dropdown item
const dropdownToggle = document.querySelector('[bw-navbar="toggle-dropdown1"]');
const dropdown = document.querySelector('[bw-navbar="dropdown1"]');

dropdownToggle.addEventListener('click', () => {
  if (window.innerWidth > 991) {
    dropdown.classList.toggle('active-dropdown');
    navbar?.classList.toggle('white-nav');
  } else dropdown.classList.toggle('active-dropdown');

  // Disable scrolling when the link is clicked
  if (dropdown.classList.contains('active-dropdown')) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  } else if (window.innerWidth < 991) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
  }
});

dropdown?.addEventListener('click', () => {
  if (window.innerWidth > 991 && dropdown.classList.contains('active-dropdown')) {
    dropdown.classList.remove('active-dropdown');
    dropdown.classList.remove('white-nav');
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
  }
});

// Toggle mobile navbar
const mobileNavToggle = document.querySelector('[bw-navbar="mobile-toggle"]');
const mobileNav = document.querySelector('[bw-navbar="menu"]');

mobileNavToggle.addEventListener('click', () => {
  mobileNavToggle?.classList.toggle('is-active');
  mobileNav.classList.toggle('active-menu');
  navbar?.classList.toggle('white-nav');

  // Disable scrolling when the navbar is visible in mobile
  if (mobileNav.classList.contains('active-menu') && window.innerWidth < 991) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
  }
});
