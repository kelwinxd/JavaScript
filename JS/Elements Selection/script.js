/*

// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.animais-descricao');
const h2Animais = animais.querySelector('h2');

console.log(animais);
console.log(h2Animais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[--paragrafos.length]);

*/

const byClass = document.getElementsByClassName('grid-section')
const byQuery = document.querySelector('ul')
//Selecting elements inside the other
const Li = byQuery.querySelector('li')

//Seleciona todos os elementos que comecem com href http://
const Href = document.querySelector('[href^="http://"]')

const Imgs = document.querySelectorAll('.animais img')

//o Foreach funciona mais com o queryselector do que com byclassname
Imgs.forEach(function(item) {
    //console.log(item)
    
})

//Transforma um elemento em array
const ArrayClass = Array.from(byClass)




//Exercices

// Selecionar imagens que comecem que comecem com img/imagem...
const Imagem = document.querySelectorAll('img[src^="img/imagem"]')


// Selecionar links que comecem com #
const InternalLink = document.querySelectorAll('[href^="#"]')

//Selecionar o ultimo paragrafo
const UltimoP =  document.querySelectorAll('p')

//console.log(UltimoP[UltimoP.length - 1])

//FOREACH
/*
const ImgEach = document.querySelectorAll('img')
ImgEach.forEach(function(item, index, array){
    console.log(item,index, array)
})
*/
const Peach = document.querySelectorAll('p')
Peach.forEach((item) => {
console.log(item.innerText)
})

