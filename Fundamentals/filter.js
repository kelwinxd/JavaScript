let num = [1,4,5,8,6,8]
let even = num.filter(isEven)
console.log(even)

function isEven(el){
    return el % 2 === 0
}