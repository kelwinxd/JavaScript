const btn = document.querySelector('.menuH')
const items = document.querySelector('#list')
const exit = document.querySelector('.exit')


function open(){
    items.classList.toggle('active')
    if(items.classList.contains('active')){
      btn.style = 'transform: rotate(90deg);'
    } else {
      setTimeout(() => { btn.style='transform:rotate(0deg);'},200)
     
    }
    setTimeout(() => {btn.classList.toggle('rot')
    exit.classList.toggle('rot')},300)
    
   
}


btn.addEventListener('click', open)
