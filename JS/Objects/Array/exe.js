const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas.shift();

// Remova o último valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop();


// Adicione 'Arroz' ao final da array
comidas.push('Arroz')



// Adicione 'Peixe' e 'Batata' ao início da array
const com2 = comidas.unshift('Peixe','Batata')



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort()
// Inverta a ordem dos estudantes
estudantes.reverse()
// Verifique se Joana faz parte dos estudantes
estudantes.includes('Joana')
// Verifique se Juliana faz parte dos estudantes

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
 html = html.split('section')
 html = html.join('ul')
 html = html.split('div')
 html = html.join('li')
// utilizando split e join

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carros2 = carros.slice()
carros.pop()


console.log(carros,carros2)
