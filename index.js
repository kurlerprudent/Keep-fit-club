const toggleMenu = document.getElementById('menuButton');
const navBar = document.querySelector('nav');
const appearOnSmallScreen = document.getElementById('appearOnsmallScreen');
let isMenuOpen = false;

document.addEventListener('DOMContentLoaded', function () {
    toggleMenu.addEventListener('click', function () {
        if (!isMenuOpen) {
            toggleMenu.classList.add('bx-x');
            toggleMenu.classList.remove('bx-menu');
            navBar.style.right = '0%';
            navBar.style.display = 'flex';
            appearOnSmallScreen.style.display = 'block'; // Show the element
            isMenuOpen = true;
        } else {
            toggleMenu.classList.add('bx-menu');
            toggleMenu.classList.remove('bx-x');
            navBar.style.right = '-100%';
            appearOnSmallScreen.style.display = 'none'; // Hide the element
            isMenuOpen = false;
        }
    });
});
