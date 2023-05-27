import initScrollSuave from "./modules/InitScrollsuave";
import initAnimacaoScroll from "./modules/initAnimaScroll";



initAnimacaoScroll();

initScrollSuave();




function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });

      console.log(tabContent[index].dataset.anime)
      const direciton = tabContent[index].dataset.anime
      tabContent[index].classList.add('ativo', direciton);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();




/*
const itemScroll = document.querySelectorAll('js-scroll')


function scrollAction(){
  console.log('scrooool')
}


itemScroll.forEach((item) => {
item.addEventListener('scroll', scrollAction)
})

*/




 