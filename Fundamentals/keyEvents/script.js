const box = document.querySelector('.mybox')

document.addEventListener('keydown', (event) => {
    box.textContent = "😯"
    box.style.backgroundColor = "tomato"
})

document.addEventListener('keyup', (event) => {
    box.textContent = "😀"
    box.style.backgroundColor = "lightblue"
})

const moveAmount = 10
let x = 0
let y = 0

document.addEventListener('keydown', (event) => {

    // Pega as dimensões do box e da janela (viewport)
    const boxRect = box.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                if (boxRect.top - moveAmount > 0) { // Evita sair pela parte superior
                    y -= moveAmount;
                }
                break;
            case "ArrowDown":
                if (boxRect.bottom + moveAmount < viewportHeight) { // Evita sair pela parte inferior
                    y += moveAmount;
                }
                break;
            case "ArrowRight":
                if (boxRect.right + moveAmount < viewportWidth) { // Evita sair pela direita
                    x += moveAmount;
                }
                break;
            case "ArrowLeft":
                if (boxRect.left - moveAmount > 0) { // Evita sair pela esquerda
                    x -= moveAmount;
                }
                break;
        }

        box.style.top = `${y}px`
        box.style.left = `${x}px`
    }
})
