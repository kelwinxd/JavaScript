const btn = document.querySelector('.button')
const input = document.querySelector('input')
const div = document.querySelector('.div')
const btnFont = document.querySelector('.range')
let Items = []

btn.addEventListener('click', () => {
         const li = document.createElement('li')
         li.textContent = input.value
         Items.push(li)
         div.append(li)
         
})

btnFont.addEventListener('input', function() {
    const Lis = document.querySelectorAll('li');
    const value = this.value;
    for (let i = 0; i < Lis.length; i++) {
        Lis[i].style.fontSize = value + "px";
    }
});


const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')

function reveal(){
    if(box2.classList.contains('reveal')){
        box2.classList.remove('reveal')
    } else {
        box2.classList.add('reveal')
    }
}

box1.addEventListener('click', reveal)

