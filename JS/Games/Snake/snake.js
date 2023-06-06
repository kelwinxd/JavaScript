import { getinputDirection } from "./input.js"
export const snakeSpeed = 1
const snakeBody = [{x:10, y:11},
   


]

export function update(){
    const inputDirection = getinputDirection()
    for(let i = snakeBody.length - 2;i >= 0;i--){
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard){
    snakeBody.forEach(axes => {
        const Snake = document.createElement('div')
        Snake.style.gridColumnStart = axes.x
       Snake.style.gridRowStart = axes.y
        Snake.classList.add('snake')
        gameBoard.appendChild(Snake)
        
    })
}


