const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')
tabContent[0].classList.add('ativo')


//fazendo um click num item influenciar outro item

function Active(index){
    
tabContent.forEach((tab) => {
    tab.classList.remove('ativo')
})
    tabContent[index].classList.add('ativo')
}



tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
        Active(index)
    } )
})


console.log(tabMenu)

//para conferir no console se um item é falso ou não digite a variavel assim:
// !!var

