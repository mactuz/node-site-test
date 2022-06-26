const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!<br><br>This is the server speaking...')
})

app.listen(3000, function() {
  console.log('Hello World app listening on port 3000!');
})