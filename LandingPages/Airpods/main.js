const toggle = document.getElementById('nav-toggle'),
nav = document.getElementById('nav-menu')

toggle.addEventListener('click', () => {
    nav.classList.toggle('show')
})