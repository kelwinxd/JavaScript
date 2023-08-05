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

dropMenus.forEach((item) => {
    item.addEventListener('click',outDrop)
})

function outDrop(event){
    event.preventDefault()
    if(event.target == this){
        menu.classList.remove('active')
        console.log('dsasadsa')
    }
}

