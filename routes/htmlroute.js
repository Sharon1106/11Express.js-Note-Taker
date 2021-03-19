const path = require('path');

module.exports = app => {
  // when user hits home page send path home page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  // when user hits /notes send path notes page
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found or is left empty default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
}
