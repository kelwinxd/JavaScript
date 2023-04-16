
// To find out what you can do with type of date
Object.getOwnPropertyNames(Array.prototype)

// Pay attention in which kind of value its been returned
// String, Array, Boolean, Object...
// Each one will have its own properties

function Pessoa(){
    this.name = "Kelwin";
    this.walk = function(){
        return this.name + " walked"
    }
}

const John = new Pessoa
// John.name will 


//Exercicies 

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa



function People(name, lastname){
    this.name = name
    this.lastName = lastname
    this.idade = 24

}

People.prototype.showName = function (){
    return `${this.name} ${this.lastName}`
}
const Kel = new People('Kel', 'Esechiel')




// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

//Para saber o tipo de dado e suas propriedades basta por o elemento.constructor.name

li; // HTMLLIELEMENT
li.click; // Function
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;


