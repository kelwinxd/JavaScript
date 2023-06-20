import initGetDate from "./getDate.js";

initGetDate()

const now = new Date()
const future = new Date('Dec 31 2023 23:59')

console.log((now.getMonth() == '5') ? 'Junho' : 'Outro Mes')

console.log(future)

//getTime conta em milessegundos desde 1970


//formula para converter milessegundos em dias
function Transformday(n){
   const result = n / (24 * 60 * 60 * 1000)
   return Math.floor(result)
}

const nowDay = (Transformday(now.getTime()))
const newYearsEve = (Transformday(future.getTime()))

const howMuchEve = newYearsEve - nowDay


console.log(`Faltam ${howMuchEve} dias para o ano Novo`)


