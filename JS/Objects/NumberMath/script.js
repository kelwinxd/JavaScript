const value = 1.00


// Formatar um dado de acordo com o país, por exemplo uma moeda:
const preco = 59.49;

const real = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49
const dolar = preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49

console.log(dolar)

//Math
 // Area of Circle
 const Pi = Math.PI
 const Radius = 2
 const Area = Pi * Radius**2
 //toFixed round the number to near, but transform it in a String
 const areaRounded = Area.toFixed(2)

 // + by right side of Varible transform it in a Number
 console.log(+areaRounded)

 //Random number

 const Random = Math.random() * 10 
 const Random2 = Math.random() * (50 - 10 + 1 ) + 10

 console.log(+Random2.toFixed())








