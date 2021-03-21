// dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// require2 app function modules
require('./routes/apiroute')(app);
require('./routes/htmlroute')(app);

app.listen(PORT, function() {
  console.log("App is listening on port " + PORT);
});
