
const div = document.getElementById('div')
const div2 = document.getElementById('div2')
const div3 = document.getElementById('div3')
const btnInit = document.querySelector('.init')
const reset = document.querySelector('.reset')
const btnPause = document.querySelector('.pause')

for (let i = 0; i < 50; i++){
    setTimeout(()=> {
        console.log(i)
        div.textContent = i
    }, 1000 * i)
    
}


let a = 0;

const myLoop = setInterval(() => {
    console.log(a++)

    if(a > 10){
        clearInterval(myLoop)
    }

    div2.textContent += a
}, 500);


// Mude a cor da tela para azul e depois para vermelho a cada 2s.
/*let z = 1
setInterval(() => {
    z++
    document.body.style.backgroundColor = 'red'
}, 250 * z);

let t = 1
setInterval(() => {
    t++
    document.body.style.backgroundColor = 'blue'
}, 500 * t);*/

// orrrr, define a class active each 2s 

//setInterval(()=> {
 //   document.body.classList.toggle('active')
//},2000)


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
function Active(){
    function Init(){
        let u = 0
        const Timer = setInterval(() => {
            u++
            div3.textContent = u
        }, 1000);
       btnInit.setAttribute('disabled','')
       btnPause.addEventListener('click', Pause )
       function Pause(){
          clearInterval(Timer)
       }
       reset.addEventListener('click', resetTimer)
       function resetTimer(){
        div3.textContent = 0
        u = 0
        btnInit.removeAttribute('disabled')
        clearInterval(Timer)
       }


    }
    Init()
  

  
    
  
}





btnInit.addEventListener('click', Active)


