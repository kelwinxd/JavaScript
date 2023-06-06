import {update as upSnake, draw as drawSnake, snakeSpeed } from "./snake.js"


let lastRender = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsRender = (currentTime - lastRender) / 1000
    if (secondsRender < 1 / snakeSpeed) return
    console.log('Render')
    lastRender = currentTime

    update()

    draw()
    
}

window.requestAnimationFrame(main)


function update(){
   upSnake()
}

function draw(){
    gameBoard.innerHTML = ''
   drawSnake(gameBoard)
}




