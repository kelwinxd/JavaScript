const cube = document.querySelector('.cube');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const face = button.id;

    if (face === 'front') {
      cube.style.transform = 'rotateY(0deg)';
      document.querySelector('.projects').classList.add('animationquit')
        document.querySelector('.bar').style.width = '0px'
    } else if (face === 'right') {

               document.body.style.backgroundColor = 'gray'
               document.querySelector('.sun').classList.add('rise')
            setTimeout(() => {
                document.querySelector('.projects').classList.remove('animationquit')
                document.querySelector('.projects').classList.add('animation')
                document.querySelector('.bar').style.width = '150px'
                
           }, 500)
           
      
      cube.style.transform = 'rotateY(-90deg)';
    } else if (face === 'back') {
      
      cube.style.transform = 'rotateY(-180deg)';
    } else if (face === 'left') {
        
      cube.style.transform = 'rotateY(90deg)';
    } else if (face === 'top') {
      cube.style.transform = 'rotateX(-90deg)';
    } else if (face === 'bottom') {
      cube.style.transform = 'rotateX(90deg)';
    }
  });
});
