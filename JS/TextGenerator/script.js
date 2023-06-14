const typedText = document.querySelector('.typed-text')
const cursor = document.querySelector('.cursor')

const words = ['Beautiful','Hot','My Babe']

const typingDelay = 200
const erasingDelay = 170
const newletterDelay = 2000
let index = 0
let indexChar = 0

//Delay between current and next text

document.addEventListener('DOMContentLoaded',() => {
    setTimeout(type,newletterDelay)
})


function type(){
    if(indexChar < words[index].length){
        typedText.textContent += words[index].charAt(indexChar)
        indexChar++
        setTimeout(type,typingDelay)
    }else {
        setTimeout(erase, newletterDelay)
    }
}

function erase(){
    if (indexChar > 0){
        typedText.textContent = words[index].substring(0,indexChar -1)
        indexChar--
        setTimeout(erase, erasingDelay)
    }else {
        index++
        if(index >= words.length){
            index = 0
        }
        setTimeout(type, typingDelay + 1000)
    }
}


