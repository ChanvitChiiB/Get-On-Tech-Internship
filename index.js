var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/internship', function (req, res, next) {
  res.json({msg: 'Internship'})
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})