const dataBase = require('../db/db.json');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');

module.exports = (app) => {

  //get request from notes path
  app.get('/api/notes', (req, res) => {
    // sends data from db
    res.sendFile(path.join(__dirname, '/../db/db.json'));
  });

  //post request to notes path
  app.post('/api/notes', (req, res) => {
    let dataBase = JSON.parse(fs.readFileSync('db/./db.json'));
    let newNote = req.body;

    dataBase.push(newNote);
    newNote.id = uuid.v4();

    fs.writeFileSync('db/./db.json', JSON.stringify(dataBase));
    res.json(dataBase);
  });
   
  //delete request to db
  app.delete('/api/notes/:id', (req, res) => {

    let dataBase = JSON.parse(fs.readFileSync('db/./db.json'));
    let deleted = dataBase.filter((deletedNote) => deletedNote.id !== req.params.id);

    fs.writeFileSync('db/./db.json', JSON.stringify(deleted));
    res.json(deleted);

  })  
};