// EXERCICIOS ------------------------------------------------------


 // Retorne um número aleatório
// entre 1050 e 2000

const ran = Math.random() * (2000 - 1050 + 1) + 1050
console.log(+ran.toFixed())


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const ArrayNum = numeros.split(', ')
//Spread or ... Means that it will affect every element of the Array
const Max = Math.max(...ArrayNum)
console.log(Max)






// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let counter = 0

function Clean(){
    listaPrecos.forEach((item) => {
        const CleanN = item.toLowerCase().replace('r$ ', '').trim().replace(',','.')
        counter += (+CleanN)
        
    })
    console.log(Math.ceil(counter).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}))
}

Clean()


