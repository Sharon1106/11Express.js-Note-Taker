// we need fs to read and write files
const path = require('path');
const dataBase = require('../db/db.json');
const fs = require('fs');
//unique id's
const uuid = require('uuid');


module.exports = (app) => {
  //get request from db file
  app.get('/api/notes', (req, res) => {
      //send file 
      res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    //post request from db
  app.post('/api/notes', (req, res) => {
    //local variables 
    const dataBase = JSON.parse(fs.readFileSync('../db/db.json'));
    const newNote = req.body;

    dataBase.push(newNote);
    newNote.id = uuid.v4();
    
    fs.writeFileSync('../db/db.json', JSON.stringify(dataBase));
    res.json(dataBase);
  });
   
  app.delete('api/notes/id:', (req,res) => {
    const dataBase = JSON.parse(fs.readFileSync('../db/db.json'));
    const deleted = dataBase.filter((delNote) => delNote.id !== req.params.id);

    fs.writeFileSync('../db/db.json', JSON.stringify(deleted));

    res.json(deleted);
  })  
};






