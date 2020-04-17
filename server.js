var express = require('express')
var path = require('path')
var app = express()
var localhost = require('address').ip()
app.use(express.static(path.join(__dirname, '/dist')))
app.listen(8888, err => {
  var uri = `http://${localhost}:8888`
  if (!err) {
    console.log(uri)
  } else {
    console.log(err)
  }
})
