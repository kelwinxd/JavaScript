/* Menu Show Y Hidden   */

const navMenu = document.getElementById('nav-menu'),
        toggleMenu = document.getElementById('nav-toggle'),
        closeMenu = document.getElementById('nav-close')


//Show
toggleMenu.addEventListener('click', () => {
    navMenu.classList.add('show')
})

//Hide
closeMenu.addEventListener('click',() => {
    navMenu.classList.remove('show')
})