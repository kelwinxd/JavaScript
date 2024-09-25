const mongoose = require('mongoose')

// Tipos de dados permitidos: Array; Boolean; Buffer; Date; Mixed; Number; ObjectId; String
const bookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    year: Number,
})

module.exports = mongoose.model('book', bookSchema)