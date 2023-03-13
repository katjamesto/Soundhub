const btnMenu = document.querySelector('.hamburguer-mobile-btn')
const showMobileMenu = document.querySelector('.left-nav-links')

btnMenu.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    showMobileMenu.classList.toggle('inactive')
}