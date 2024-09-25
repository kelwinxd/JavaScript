const mongoose = require('mongoose');

// URL de conexão com o MongoDB
const uri = 'mongodb://localhost:27017/test'; // Certifique-se de que 'test' é o nome correto do banco de dados

// Função para conectar ao banco de dados
async function conectar() {
  try {
    // Conectando ao banco de dados usando Mongoose sem as opções deprecadas
    await mongoose.connect(uri);
    console.log('Conectado ao MongoDB com Mongoose!');
    
    // Aqui você pode realizar operações com o banco de dados usando Mongoose
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB com Mongoose', err);
  }
}

conectar();


const bookModel = require('./book')

const book1 = new bookModel({
    author:'ursula',
    title:'sdsadsa',
    year:1998
})

book1.save().then(doc => console.log(doc)).catch(error => console.log(error))



