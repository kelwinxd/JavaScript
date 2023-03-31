const Faq1 = document.querySelector('#faq')
const faqTitle = Faq.querySelector('.titulo')

const DescAni = document.querySelector('.animais-descricao')
const lastDesc = DescAni.children[--DescAni.children.length]

const Mapa = document.querySelector('.mapa')



const Esquilo = DescAni.children[1]

DescAni.appendChild(Esquilo)

Faq.insertBefore(Esquilo, faqTitle)

Faq.replaceChild(Mapa, faqTitle)

console.log(faqTitle)



// How to double a item without moving it

const Menu = document.querySelector('.menu');
const Copy = document.querySelector('.copy');

const CloneMenu = Menu.cloneNode(true)

Copy.appendChild(CloneMenu)




//Replace Faq to Animais

const Faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

Faq.innerHTML = Menu.innerHTML










