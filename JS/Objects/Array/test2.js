const list = [2,4,5]

Sum = list.reduce((counter, item) => {
    return counter+item
}, 0)
console.log(Sum)

