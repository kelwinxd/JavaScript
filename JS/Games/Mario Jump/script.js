const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const cloud1 = document.querySelector(".cloud")
const cloud = document.getElementById("cl")
const score = document.querySelector(".score")


function jump(e){
   if(e.key === 'ArrowUp'){
     mario.classList.add("jump")
     setTimeout(() => {
       
            mario.classList.remove("jump")
        
     }, 500)
     
   }

}

const scoring = setInterval(() => {

    score.textContent ++
},200)




function animaState(){
      window.getComputedStyle()
}

const loop = setInterval(() => {
const pipePosition = pipe.offsetLeft
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')



if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
pipe.style.animation = 'none'
pipe.style.left = `${pipePosition}px`

mario.style.animation = 'none'
mario.style.bottom = `${marioPosition}px`
mario.setAttribute('src','./Imgs/game-over.png')
mario.style.width = '80px'
mario.style.marginLeft = '50px'

clearInterval(scoring)

score.textContent = `${score.textContent}`


clearInterval(loop)
}
},10)





setTimeout(()=> {
   cloud.classList.add("cloudsA")
}, 5000)








console.log(window.getComputedStyle(mario).bottom)

document.addEventListener('keydown', jump)