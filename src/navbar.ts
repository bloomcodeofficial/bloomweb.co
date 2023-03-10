// // Adds a fixed class to the navbar element when the page has been scrolled down more than 300 pixels, and removes the fixed class when the user scrolls back up. It also adds an active class to the navbar when the user scrolls down past 400 pixels, but is scrolling up again, and removes the active class otherwise. The variable lastScrollY is being used to store the last scroll position. //

// const navbar = document.querySelector('[bw-navbar="component"]');
// let lastScrollY = window.scrollY;

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 300) {
//     navbar.classList.add('fixed-nav');
//   } else {
//     navbar.classList.remove('fixed-nav');
//   }

//   if (window.scrollY < lastScrollY && window.scrollY > 400) {
//     navbar.classList.add('active-nav');
//   } else {
//     navbar.classList.remove('active-nav');
//   }

//   lastScrollY = window.scrollY;
// });

// // Toggle Dropdown item
// const dropdownToggle = document.querySelector('[bw-navbar="toggle-dropdown1"]');
// const dropdown = document.querySelector('[bw-navbar="dropdown1"]');

// dropdownToggle.addEventListener('click', () => {
//   if (window.innerWidth > 991) {
//     dropdown.classList.toggle('active-dropdown');
//     navbar?.classList.toggle('white-nav');
//   } else dropdown.classList.toggle('active-dropdown');

//   // Disable scrolling when the link is clicked
//   if (dropdown.classList.contains('active-dropdown')) {
//     document.body.style.overflow = 'hidden';
//     document.body.style.paddingRight = '15px';
//   } else if (window.innerWidth < 991) {
//     document.body.style.overflow = 'hidden';
//   } else {
//     document.body.style.overflow = 'auto';
//     document.body.style.paddingRight = '0px';
//   }
// });

// dropdown?.addEventListener('click', () => {
//   if (window.innerWidth > 991 && dropdown.classList.contains('active-dropdown')) {
//     dropdown.classList.remove('active-dropdown');
//     dropdown.classList.remove('white-nav');
//     document.body.style.overflow = 'auto';
//     document.body.style.paddingRight = '0px';
//   }
// });

// // Toggle mobile navbar
// const mobileNavToggle = document.querySelector('[bw-navbar="mobile-toggle"]');
// const mobileNav = document.querySelector('[bw-navbar="menu"]');

// mobileNavToggle.addEventListener('click', () => {
//   mobileNavToggle?.classList.toggle('is-active');
//   mobileNav.classList.toggle('active-menu');
//   navbar?.classList.toggle('white-nav');

//   // Disable scrolling when the navbar is visible in mobile
//   if (mobileNav.classList.contains('active-menu') && window.innerWidth < 991) {
//     document.body.style.overflow = 'hidden';
//     document.body.style.paddingRight = '15px';
//   } else {
//     document.body.style.overflow = 'auto';
//     document.body.style.paddingRight = '0px';
//   }
// });

const navbar = document.querySelector('[bw-navbar="component"]');
const dropdownToggle = document.querySelector('[bw-navbar="toggle-dropdown1"]');
const dropdownIcon = document.querySelector('[bw-navbar="dropdown-icon"]');
const dropdown = document.querySelector('[bw-navbar="dropdown1"]');
const mobileHamburger = document.querySelector('[bw-navbar="hamburger"]');
const mobileNav = document.querySelector('[bw-navbar="menu"]');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    navbar?.classList.add('fixed-nav');
  } else {
    navbar?.classList.remove('fixed-nav');
  }

  if (window.scrollY < lastScrollY && window.scrollY > 400) {
    navbar?.classList.add('active-nav');
  } else {
    navbar?.classList.remove('active-nav');
  }

  lastScrollY = window.scrollY;
});

// Open dropdown
const openDropdown = function () {
  // Toggle dropdown on desktop
  if (window.innerWidth >= 968) {
    dropdown?.classList.toggle('active-dropdown');
    dropdownIcon?.classList.toggle('is-active');
    navbar?.classList.toggle('white-nav');
    document.body.classList.toggle('no-scroll');
    // Toggle dropdown on tablet and mobile
  } else if (window.innerWidth < 968) {
    dropdown?.classList.toggle('active-dropdown');
    dropdownIcon?.classList.toggle('is-active');
  }
};

// Close dropdown
const closeDropdown = function () {
  // Close dropdown on desktop
  if (window.innerWidth >= 968) {
    dropdown?.classList.remove('active-dropdown');
    navbar?.classList.remove('white-nav');
    document.body.classList.remove('no-scroll');
    // Close dropdown on tablet and mobile
  } else if (window.innerWidth < 968) {
    dropdown?.classList.remove('active-dropdown');
  }
};

// Open mobile menu
const openMenu = function () {
  mobileNav?.classList.toggle('active-menu');
  navbar?.classList.toggle('white-nav');
  document.body.classList.toggle('no-scroll');
  mobileHamburger?.classList.toggle('is-active');
};

dropdownToggle?.addEventListener('click', openDropdown);
dropdown.addEventListener('click', closeDropdown);
mobileHamburger?.addEventListener('click', openMenu);
