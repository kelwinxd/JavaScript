console.log(Number.isNaN('ds'));
console.log(Number.isInteger(10.4343434));

console.log(parseFloat('  32434.343'))
console.log(parseFloat('100.27 reais'))
console.log(parseInt('100.27 reais', 10))
console.log(parseInt(23.49, 10))

const preco = 10.32323;
console.log(preco.toFixed())

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

console.log(valor)
console.log(Math.PI)



const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

console.log(aleatorio)

//abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda
// para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número 
//integral mais próximo.

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

