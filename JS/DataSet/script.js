//Selecionam a mesma div
const div = document.querySelectorAll('[data-cor]')
 //div = document.querySelectorAll('[data-cor="blue"]') mesma coisa


 const Ardiv = Array.from(div)


 divs.forEach((div) => {
   div.classList.add(div.dataset.anima);
 });
 
 // adiciona em cada div
 // uma classe com o mesmo nome
 // que o valor de data
 

console.log(div.dataset.cor)


