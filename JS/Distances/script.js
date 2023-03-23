
const Title = document.querySelector('.animais-lista')

const DisTitle = Title.offsetTop
const Scroll = Title.scrollHeight

const SecondH2 = document.querySelector('h2')
//getBoundingClientRect show all the measures of a element like, Height, Width, top, bottom, and so on
const MeasureH2 = SecondH2.getBoundingClientRect();

//window.innerWidth = Measure only the content page width
//window.outerWidth = Measure all the window including dev tools
//window.innertheight = Measure only the content page height
// .......outerHeight = Measure all the page


if(MeasureH2.top < 0){
  console.log('It has passed')
}

const smallMedia = window.matchMedia('(max-width: 650px)').matches
if(smallMedia){
  const Back = document.querySelector('.animais-descricao')
  const Menu = document.querySelector('.menu')
  Back.classList.add('Black')
  Menu.classList.add('mobile')
}


console.log(MeasureH2.top)



















// Verifique a distância da primeira imagem
// em relação ao topo da página
/*
const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function() {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui boa acessibilidade')
  } else {
    console.log(link, 'Não possui boa acessibilidade')
  }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
*/