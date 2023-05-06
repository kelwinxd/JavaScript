
const word = 'the Javascript'
const letter = 'as'
const phrase = " as far as i know, is the "

//CharAt pega o character pelo index 
console.log(word.charAt(1))


// Concat concatena frases, e pode ir adicionando
console.log(word.concat(phrase, 'the easier language'))


// Includes procura se um dado inclui outro, includes(palavra, index)
console.log(phrase.includes(letter))

//Ends and Starts with
console.log(letter.startsWith('a'))

//Slice, its cuts the phrase, slice(x): cut until x, slice(x,y): cut between x and y
console.log(word.slice(0, 3))

//Indexof, figure out the first index, Lastindexof catches the last index like it
console.log(word.indexOf('Ja'))
console.log(word.lastIndexOf('a'))

// PadStart and PadEnd, it fills spaces that are defined

const List = ['Phone', 'Hat','Belt']

List.forEach((item) => {
    console.log(item.padStart(10,'*'))
})

//Repeat, it simply repeat the constant

console.log(letter.repeat(5))

//Replace, it replace a value, replace(value, subtitute)
const exemple = '28-04-1998'
exemple.replace('2','1')

//Using Regular expression, [x] means the character you wanna replace, "g" means that it will be aplicated to all
// to replace using RegExp, you envolve in parentheses and order like $1, $2, $3
exemple.replace('')
console.log(exemple.replace(/([0-9]{2})[-]([0-9]{2})[-]([0-9]{4})/,'$3/$2/$1'))


//Split, it separate the items and become it ina Array

const Items = 'Wrist Chain, Ring, Ankle Acessory'
const ArrayItem = Items.split(', ')
console.log(ArrayItem)

// You could use Split and Join togather
const Htmltext = "<div class='ativo'> <p>texto<p> </div>"
const Htmlsplit = Htmltext.split('ativo') 
const Htmljoin = Htmlsplit.join('desativado')
console.log(Htmljoin)


//Trim, you clean unnecessary spaces

const Price = '  R$ 25.00 '
console.log(Price.trim())






