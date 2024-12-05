const progress = document.querySelector('.progress')
const percent = document.querySelector('.percent')

let x = 30;
let count = 2;

const loading = setInterval(animate,24)

function animate(){
    if(x>=250){
        clearInterval(loading)
    } else {
        x+=2;
        if(count <= 68) {
            count+=0.8
        }
      
        percent.textContent = `${Math.floor(count)}%`
        progress.style.width = `${x}px`
    }
}