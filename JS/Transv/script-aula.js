// how to double a element without moving it

const Menu = document.querySelector('.menu');
const Copy = document.querySelector('.copy');


const CloneMenu = Menu.cloneNode(true)

Copy.appendChild(CloneMenu)



