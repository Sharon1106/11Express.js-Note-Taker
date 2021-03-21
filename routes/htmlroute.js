const path = require('path');

module.exports = app => {
  // path home page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  // path notes page
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // efault to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
}
