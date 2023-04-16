// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }


function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.andar = function(){
        console.log(this.nome + ' andou')
    }
}


  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  const João = new Pessoa('João', 20)
João.andar()

  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos


  function Dom(selector){
   const elementlist = document.querySelectorAll(selector)
   this.elements = elementlist
   this.addClass = function(classe){
    elementlist.forEach((item) => {
        item.classList.add(classe)
    })}}

const List1 = new Dom('li')




    















  
  
  


