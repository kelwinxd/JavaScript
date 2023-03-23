
//Adicione a class Ativa a todos os elementos do Menu
const MenuItem = document.querySelectorAll('.menu a')

MenuItem.forEach((item) => {
    item.classList.add('ativa')
})

console.log(MenuItem)

// Remova a classe ativa exceto do primeiro

MenuItem.forEach((item) => {
    item.classList.remove('ativa')
})
MenuItem[0].classList.add('ativa')

// Verifique se a imagem possue o atributo Alt

const Imagens = document.querySelectorAll('img')

Imagens.forEach((item) => {
   const HasAtr = item.hasAttribute('alt')
   console.log(item, HasAtr)
    
})


