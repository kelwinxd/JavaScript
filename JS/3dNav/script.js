const container = document.querySelector('.page-container')
const pages = document.querySelectorAll('.page')
const togleBtn = document.querySelector('.toggle-btn')
const ul = document.querySelector('.nav-list')
const overlay = document.querySelector('.overlay')
const links = document.querySelectorAll('.link')

console.log(container,pages,togleBtn,ul,overlay,links)

let indexPage = 0

togleBtn.addEventListener('click', () => {
    togleBtn.classList.toggle('active')
    container.classList.toggle('active')
    setTimeout(() => {
        ul.classList.toggle('show')
    },500 )
    
})

links.forEach((item,i) => {
    item.addEventListener('click',()=>{
            nextPage(i)
    })
})



function nextPage(index){
    overlay.style.animation = `slide 1s linear`

    setTimeout(() => {
       pages[indexPage].classList.remove('active')
       pages[index].classList.add('active')
       indexPage = index
    }, 500)

    setTimeout(() => {
        overlay.style.animation = null
    },1000)
}