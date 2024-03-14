//imprimir o ultimo nome
const fullName = 'Kelwin regis esecHiel'
//const First = fullName.slice(0, fullName.indexOf(" "))
const Test = fullName.slice(fullName.lastIndexOf(" ") + 1)

//Chainning Method
console.log(Test.charAt(0).toUpperCase() + Test.slice(1).toLowerCase())


