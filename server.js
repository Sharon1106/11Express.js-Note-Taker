// dependencies
const express = require('express');
const path = require('path');
// express app is //listening on port 8080
const app = express();
const PORT = process.env.PORT || 8080;

// MIDDLEWARE
 // express app data parsing
app.use(express.urlencoded({ extended: true }));
// parse application/express
app.use(express.json());
//like Wilson said:
 // we need: express.static('public'); to read from the folder public
app.use(express.static("public"));


// we require the 2 app function modules
require('./routes/apiroute')(app);
require('./routes/htmlroute')(app);

// server starts to listen
app.listen(PORT, function() {
  //to know if it's running
  console.log("App is listening on port " + PORT);
});