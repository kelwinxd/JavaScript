const marcasMaisCaras = ["Louis Vuitton", "Chanel", "Hermès", "Gucci", "Prada"];

marcasMaisCaras.forEach((item,index,array) => {
    console.log(`${index+1} - ${item} ${array}`);
})

const numeros = [2, 10, 6, 8, 24, 12, 14];

//Somando com Reduce
const Soma = numeros.reduce((counter,item) => { return counter + item}, 0)


//Descobrindo o numero máximo
const Maxnumber = numeros.reduce((before, now) => before > now ? before : now, 0)
console.log(Maxnumber)


//ReduceRight e Left

const Fruits = ['Banana','Watermelon','Grape'];

//Esta printanto a lista ao contrario
const Frev = Fruits.reduceRight((acc, f) => acc + ' ' + f)

console.log(Frev)


//some 
const HasGrape = Fruits.some((item) => {
    
    
    return item === "Grapes"
   
})

console.log(HasGrape, 'have?')


//every 
//verifica todos, se algum der false, todos são false

const menor1 = numeros.every(n => n > 3)
console.log(menor1 + ' Every')


//Find 
//Ele vai retornar apenas o primeiro item que for maior que 6
//Para a função assim que der verdadeiro
const hasMax = numeros.find((item) => {
    return item > 6
})

console.log(hasMax, 'Find')
 

//Filter

const Biggers = numeros.filter(item => {
    return item > 6
})


console.log(Biggers, 'Filter')




