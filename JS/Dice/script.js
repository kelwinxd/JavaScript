const btn = document.querySelector('button')
const diceResult = document.querySelector('.diceResult')


function generateNum() {
    const numofDice = document.getElementById('inputdice').value; // Pegue o valor atualizado aqui
    const values = []; // Reinicialize o array a cada clique
    
    for (let i = 0; i < numofDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
    }
    
    diceResult.textContent = `${values.join(' ')}`;
}

btn.addEventListener('click', generateNum);


