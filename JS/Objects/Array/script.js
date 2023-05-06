const li = document.querySelectorAll('li');

//Li retornar uma nodelist, um objeto que parece uma array


//transformar um objeto em array basta adicionar uma lenght no final
const objLi = {
    0:'item',
    1:'item',
    2:'item',
    length:3
}

//Transforma uma nodelist em array
let Arrayli = Array.from(li);



const mostRich = ['Luxemburgo','Singapura','Irlanda','Catar'];
const mostPoor = ['Iemen','Niger','Barundi'];
//organiza em ordem alfabetica
mostRich.sort();

//Adiciona no fim
mostRich.push('Macau')

//Adiciona no inicio
mostRich.unshift('Suiça')

//Remove no final
mostRich.pop()

//Remove no inicio
mostRich.shift()    

//splice(apartir de qual index,qtd remove,add item)
mostRich.splice(2,0,"Estados Unidos")

//fill(item para preencher, index)
mostRich.fill('Brasil',2)

//concat, join two arrays
const Countries = mostRich.concat(mostPoor);

//includes
console.log(Countries.includes('Brasil'))
console.log(Countries.indexOf('Catar'))
console.log(Countries.lastIndexOf('Catar'))


//Join and Slipt

let text = "<p>Text 1</p>"
text = text.split("p")
text = text.join("h1")   


//Clone var

const lan = ['php','css','html','js']

const lan2 = lan.slice() // retorna a mesma array so que clonada
const lan3 = lan.splice(2) // mostra os elementos apartir do index 2

console.log(lan,'pop')
console.log(lan2,'45454')


console.log(Array.isArray(li));
console.log(Countries);
   