const express = require('express')
const app = express()

app.get('/', function (req, res) {

  var time_now= new Date().toTimeString();
 
  msg = `Hello World!<br><br>Time now is ${time_now}`

  res.send(msg);
})

port = 3000

app.listen(port, function() {
  console.log('Hello World app listening on port ' + port +'!');
})