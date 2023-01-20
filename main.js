const $navbar_email = document.querySelector('.navbar-email')
const $menu_ham = document.querySelector('.menu')
const $desktop_menu = document.querySelector('.desktop-menu')
const $mobile_menu = document.querySelector('.mobile-menu')

$navbar_email.addEventListener('click', () => {
    $desktop_menu.classList.toggle('inactive')
    console.log('presionado papu')
})

$menu_ham.addEventListener('click', () => {
    $mobile_menu.classList.toggle('inactive')
    console.log('presionado mobile')
})
