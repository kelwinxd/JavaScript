
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


const Faq = document.querySelectorAll('.js-acord dt');
Faq[0].classList.add('ativo2')
Faq[0].nextElementSibling.classList.add('ativo2')

if(Faq.length){
  function addAcord(){
    this.classList.toggle('ativo2')
    this.nextElementSibling.classList.toggle('ativo2')
}

console.log('sadsad')

Faq.forEach((item) => {
  item.addEventListener('click', addAcord)
})


}

