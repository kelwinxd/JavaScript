const arr = [20,50,60,78,41]

let sum = arr.reduce((counter, el) => {return counter += el})
let max = arr.reduce((counter, el) => Math.max(counter, el))
let min = arr.reduce((counter,el) => Math.min(counter,el))

console.log(min)