
function hideandShow(){

const links = document.querySelectorAll('a[href^="#"]')


// fazendo isso voce consegue desativar classes enquanto ativa uma apenas
function AddRe(event){
     event.preventDefault()
     links.forEach((item) => {
        item.classList.remove('ativo')
     })
    this.classList.add('ativo')

}

links.forEach((link) => {
    link.addEventListener('click', AddRe)
})


//Selecione todos os elementos do site apartir do body, ao clique mostre exatamente
//O elemento clicado


//Selecione todos os elementos apartir de body
// queryselector('body *') significaria que sekecuibe todos elementos dps de body
const body = document.querySelector('body')

function ClickB(event){
   event.target.remove()
    
}

body.addEventListener("click", ClickB)


//Ao clicar a tecla T, aumente a fonte das letras
function Tclick(event){
    if(event.key === 't'){
       //documentElement é o proprio Html, e la no css voce bota html.bigger
        document.documentElement.classList.toggle('bigger')
    }
}

window.addEventListener('keydown', Tclick)
}
hideandShow();

const Faq = document.querySelectorAll('.js-acordion dt')


function addAcord(){
    console.log(this)
    
    item.classList.add('ativo2')
    this.nextElementSibling.classList.add('ativo2')

}

Faq.forEach((item) => {
   item.addEventListener('click', addAcord)
})


