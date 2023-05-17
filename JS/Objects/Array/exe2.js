// Selecione cada curso e retorne uma array

// com objetos contendo o título, descricao,
// aulas e horas de cada curso


const Courses = document.querySelectorAll('.curso')

const ArrayCursos = Array.from(Courses)

const objCurso = ArrayCursos.map((curso) => {
    
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    return {
        titulo, 
        descricao,
    }
})

console.log(objCurso)



// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const hundMajor = numeros.filter(n => {
    return n > 100
})

console.log(hundMajor)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const hasBass = instrumentos.some(item => {
    return item === 'Baixo'
})
console.log(hasBass)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  },
  {
    item: 'Arroz',
    preco: 'R$ 454,60'
  }
]

const sumCompras = compras.reduce((counter, item) => {
    const gramar = item.preco.replace('R$ ',' ').replace(',','.').trim()
    const number = parseFloat(gramar)
    const sum = counter + number
    
    
    return Math.round(sum)
}, 0)

console.log(sumCompras)

