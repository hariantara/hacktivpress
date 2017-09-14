var express = require('express');
var router = express.Router();
var controller = require('../controller/bookController')
var helper = require('../helper/helper')
var jwt = require('jsonwebtoken')

const auth = (req, res, next) =>
{
  // console.log(req.headers.token);
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token, process.env.SECRETKEY);
    if(decoded.role == 'user')
    {
      req.headers.authentic = decoded
      next()
    }
    else {
      res.send('maaf anda belum terdaftar')
    }
  }
  else {
    res.send('you should login')
  }
  // console.log("DECODED: ",decoded)
}

router.post('/create', auth, controller.createBook)
router.get('/read', auth, controller.readall)

module.exports = router;
