var modelBook = require('../model/bookModel')
var jwt =  require('jsonwebtoken')
var helper = require('../helper/helper')
require('dotenv').config()

var createBook = function(req, res){
  modelBook.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
    res.send(err)
  })
}

var readall = function(req, res){
  modelBook.find()
  .then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
    res.send(err)
  })
}

module.exports = {
  createBook,
  readall
}
