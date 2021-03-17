// dependencies
const express = require('express');
const fs = require('fs');


// express app is
const app = express();
//listening on port 8080
const PORT = process.env.PORT || 8080;


 // express app data parsing
app.use(express.urlencoded({ extended: false }));

// parse application/express
app.use(express.json());

//like Wilson said:
 // we need: express.static('public'); to read from the folder public
app.use(express.static("public"));


// we require the functions on the 2 routes
require('./db/routes/api-routes.js')(app);
require('./db/routes/html-routes.js')(app);


// server starts to listen
app.listen(PORT, function() {
  //to know if it's running
  console.log("App is listening on port " + PORT);
});