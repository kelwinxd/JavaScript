const btn = document.querySelector('button')
const menu = document.querySelector('header nav ul')


console.log(menu)

function openMenu(){
    menu.classList.toggle('active')
    btn.classList.toggle('rot')
    
}






btn.addEventListener('click', openMenu)