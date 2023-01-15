// Get the navbar element
const navbar = document.querySelector('[bw-element="navbar"]');

// Set the initial scroll position
let lastScroll = 0;

// Listen for the scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const currentScroll = window.pageYOffset;

  // Check if the scroll position is at the top
  if (window.pageYOffset === 0) {
    // Remove the class from the navbar
    navbar.classList.remove('nav-up');
    navbar.classList.remove('nav-down');
    navbar.classList.remove('nav-fixed');

    // Update the scroll position
    lastScroll = currentScroll;
  } else if (window.pageYOffset > 500) {
    navbar.classList.add('nav-up');
    navbar.classList.add('nav-fixed')
  }

  // Check if the user has scrolled up
  if (currentScroll < lastScroll && window.pageYOffset > 500) {
    // Add the class to the navbar
    navbar.classList.add('nav-down');
  } else if (currentScroll > lastScroll && window.pageYOffset > 500) {
    // Remove the class from the navbar when the user scrolls down
    navbar.classList.remove('nav-down');
  }
  // Update the scroll position
  lastScroll = currentScroll;
});
