$(document).ready(function () {
  
  // Initialize AOS animations
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,       // whether animation should happen only once - while scrolling down
      offset: 50,       // offset (in px) from the original trigger point
      easing: 'ease-in-out', // default easing for AOS animations
    });
  }

  // Highlight active nav link based on current page URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  $('.nav-link').each(function() {
    const linkPath = $(this).attr('href');
    if (linkPath === currentPath) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });

});