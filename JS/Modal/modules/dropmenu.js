export default function dropMenu(){
    console.log('drop succesful')
}

const dropMenus = document.querySelectorAll('[data-dropmenu]')

dropMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick)
    })
})


function handleClick(event){
    event.preventDefault()
 this.classList.toggle('active')
}