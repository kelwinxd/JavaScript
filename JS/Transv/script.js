/*const Faq = document.querySelector('#faq')
const faqTitle = Faq.querySelector('.titulo')

const DescAni = document.querySelector('.animais-descricao')
const lastDesc = DescAni.children[--DescAni.children.length]

const Mapa = document.querySelector('.mapa')



const Esquilo = DescAni.children[1]

DescAni.appendChild(Esquilo)

Faq.insertBefore(Esquilo, faqTitle)

Faq.replaceChild(Mapa, faqTitle)





console.log(faqTitle)

*/

// Double the menu in copy

const Menu = document.querySelector('.menu');
const Copy = document.querySelector('.copy');

const CloneMenu = Menu.cloneNode(true);

console.log(CloneMenu)

Copy.appendChild(CloneMenu)

const Faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

Faq.innerHTML = Menu.innerHTML










