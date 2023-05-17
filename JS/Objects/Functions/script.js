function Car(velo){
    console.log(this.name + ' ' + this.model + ' ' + velo)
}


//Call executa a função como uma função pura(), mas
//Dá a possibilidade de mudar os objetos da função e parametros
//call({}, parameter)
Car.call({model:'Honda', name:'Civic'},200)

//------------------------------------


function Seletor(sel){
    this.el = document.querySelector(sel)
}


//Adicionando metodos a funcao construtora
Seletor.prototype.active = function(classe){
    console.log(this)
    this.el.classList.add(classe)
}

//para um elemento substituir outro no Call, precisa ter propriedades parecidas

const li = {
    el: document.querySelector('li')
}

const ul = new Seletor('ul')

//ul.active('active')
ul.active.call(li,'active')

console.log(ul)

//-----------------------

Array.prototype.mostreThis = function() {
    console.log(this);
  }
  
  const frutas = ['Uva', 'Maçã', 'Banana'];
  frutas.mostreThis(); // ['Uva', 'Maçã', 'Banana']



  
  Array.prototype.pop.call(frutas); // Remove Banana
  frutas.pop(); // Mesma coisa que a função acima

//------------------------
  const li2 = document.querySelectorAll('li');

  //Poderia simplesmente converter li2 em uma array com Array.from ou:

const filtro = Array.prototype.filter.call(li2, function(item) {
  return item.classList.contains('ativo');
});

console.log(filtro)
  




