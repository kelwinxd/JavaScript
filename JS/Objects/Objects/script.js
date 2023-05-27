//OBJECT CREATE()

const marvel = {
    movies: 26,
    init(value){
        this.movie = value
        return this
    },

    watch(){
        return `I'm watching ` + this.movie
    }
}

const doctor = Object.create(marvel).init("Doctor Strange")
console.log(doctor.watch())


//---------ASSIGN
// Coloca propriedades de outro objeto dentro

const funcaoAutomovel = {
    initAuto(value){
       this.auto = value
       return this
    },
    
    acelerar() {
        
      return this.auto + ' acelerou';
    },
    buzinar() {
        this.auto = value
      return this.auto + ' buzinou';
    },
    
  }
  
  const moto = {
    rodas: 2,
    capacete: true,
  }
  
  const Car2 = {
    rodas: 4,
    mala: true,
  }
  
  Object.assign(moto, funcaoAutomovel);
  Object.assign(Car2, funcaoAutomovel);

  const Dodge = Object.create(moto.initAuto("Dogde Tomahawk"))

  console.log(Dodge.acelerar())


  //Definir propriedades constantes e imutaveis como 2 rodas para Motos

  Object.defineProperties(moto, {
    rodas : {
        // por padrão elas já vem falsas
        value:2,
        writable: false,
        configurable: false
    }
  })

  moto.rodas = 7
  console.log(moto)



  const Airplane = {
    name:'Qatar Airways',
    


  }

  Object.defineProperties(Airplane, {
    year : {
      get(){
       return this._year;
      },
  
      set(value){
        this._year = 'Year Model: ' + value
      }
    }
  
  })

  //Object.

  const Numb = 24

  //para saber o que o objeto e os métodos dele:

  Object.getPrototypeOf(Numb) // String






  Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade



//Keys são as chaves do objeto, nome: etc
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const car = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(car);
// ['marca', 'ano']
Object.values(car);
// ['Ford', 2018]
Object.entries(car);
// [['marca', 'Ford'], ['ano', 2018]]
// Entries mostra a chave e o valor
const ownSymbols = Object.getOwnPropertySymbols(Numb);
console.log(ownSymbols);

  // 5. Use o método Reflect.getOwnPropertyDescriptor() para obter as informações sobre a propriedade 'name' do objeto 'person' e exibi-las no console.
  const propertyDescriptor = Reflect.getOwnPropertyDescriptor(car, 'marca');
  console.log(propertyDescriptor);


const Movie = {
  title: 'A origem',
  year: 2014,
  director: 'Christopher Nolan',
}

Object.seal(Movie)

const Car = {
  marca: 'Ford',
  ano: 2018,
}
Object.freeze(Car2);
Object.seal(Car2);
Object.preventExtensions(Car2);

Object.isFrozen(Car2); // true
Object.isSealed(Car2); // true
Object.isExtensible(Car2); // false


///----------{}.constructor, retorna a função construtora do objeto

const mostTech = ['USA', 'South Korea','Japan']

mostTech.constructor // Array

//--------- toString transforma em string

mostTech.toString()

//---------- Object.prototype.toString.call(elemento)
// mostra que tipo de objeto é, array, string etc










  