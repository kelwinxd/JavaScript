const words = ['kelwin','rsdsegis','esechiel']

const upperWords = words.map(toUpper).join(' ')

console.log(upperWords)


function toUpper(word){
         let newWord = word.charAt(0).toUpperCase()
         let edited = newWord + word.slice(1).toLowerCase()
         
         return edited
         
}

const dates = ["2024-01-10","2023-03-08"]
const datesEdited = dates.map(format)
console.log(datesEdited)


function format(el){
    const edited = el.split('-').join('/')
    return `${edited}`
}