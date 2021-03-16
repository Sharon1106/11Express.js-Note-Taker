// express.static('public');
var bodyParser = require('body-parser');
const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
 
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})






// set routes for apis 



// get
// join in db.json



// post function adds notes to db.json


// delete
// app.delete


//filter



//html calls

// call home

// call notes 

// start listening 

