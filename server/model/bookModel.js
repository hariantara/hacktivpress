var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/iputuhariantara')

var Schema = mongoose.Schema

var BookSchema = new Schema({
  title: String,
  content: String,
  category: String,
  author: String,
  createdAt: Date,
  updatedAt: Date
})

var bookModels = mongoose.model('Book', BookSchema)

module.exports = bookModels
