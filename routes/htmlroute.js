// path allows us to access and interact with the file system
const path = require('path');

module.exports = app => {
  // when user hits home page send file home page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  // when user hits /notes send file to notes page
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  
  // If no matching route is found or is left empty default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
}