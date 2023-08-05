// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

function fetchCurrency(){
    fetch('https://blockchain.info/ticker').then(r => r.json())
    .then(r => {
        document.getElementById('value').innerText =r.BRL.buy
        console.log(r.BRL.buy)
        
    })
    
  

}

setInterval(fetchCurrency, 30000)
fetchCurrency()
