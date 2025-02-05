document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu');
  
    toggleButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');

    });

    mobileMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
  
      });

});