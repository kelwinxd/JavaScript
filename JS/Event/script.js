const div = document.querySelector('.div')

function Colorc(event){
  if(event.key === 'a' ){
    document.body.classList.toggle('Blink')
    
  }
    
}


window.addEventListener('keydown', Colorc)