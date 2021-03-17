// we need fs to read and write files
const fs = require('fs');
const dataBase=  JSON.parse(fs.readFileSync(__dirname + '/db/db.json', 'utf8'));


module.exports = (app) => {
  //get request from db file
  app.get('/api/notes', (req, res) => res.json(dataBase));
  app.get('/api/:id', (req, res) => res.json(dataBase[Number(req.params.id)]));
}

app.post('/api/notes', (req, res) => {
  //local variables
  let newNote = req.body;
  // id is the length of array returned as a string
  let newId = (data.length).toString();

  newNote.id = newId;

  dataBase.push(newNote);

  // writefilesync takes in 2 parameters, 3rd one is optional but alreadt defined
  fs.writeFileSync('./db/db.json', JSON.stringify(dataBase), function(err){ 
    throw (err);
  })
  res.json(dataBase);

});


