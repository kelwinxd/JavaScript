
function EffectAP(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
  
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }
  
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

EffectAP();


function Acorddion1(){
  const Faq = document.querySelectorAll('.js-acord dt');



Faq[0].classList.add('ativo2')
Faq[0].nextElementSibling.classList.add('ativo2')

if(Faq.length){
  function addAcord(){
    this.classList.toggle('ativo2')
    this.nextElementSibling.classList.toggle('ativo2')
}



Faq.forEach((item) => {
  item.addEventListener('click', addAcord)
})


}
}


Acorddion1();


function initScrollSuave() {
 const Menu = document.querySelectorAll('.js-menu a[href^="#"]')

 function scrollS(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    console.log(section)

    section.scrollIntoView({
      behavior:'smooth',
      block: 'start'
    })
 }


 Menu.forEach((link) => {
  link.addEventListener('click', scrollS )
 })


}
initScrollSuave();



