//will need a bare minimum of 4 api routes
//will need app.get, app.post, app.delete

// Dependencies
const express = require('express');
const fs = require('fs') //fs to read and write to file and update
const data = fs.readFileSync('Develop/db/db.json')
const notes = JSON.parse(data)
console.log(notes)

//id importer to create new ID
const {v4:uuid} = require('uuid');
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const PORT = process.env.PORT || 3000
const app = express();
const path = require('path')

//will need to make this easier
app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Note = require('./Develop/db/db.json')
console.log(Note)

// Basic route that sends the user first to the index Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

// Basic route that sends the user first to the notes Page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

//   * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => {
  const data = fs.readFileSync('./Develop/db/db.json')
  const notes = JSON.parse(data)
  res.json(notes)
  //code to retrieve saved notes
    //  res.sendFile(path.join(__dirname, './Develop/db/db.json'))
  });

// req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
//   const newCharacter = req.body;
  
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
//   console.log(newCharacter);

//   characters.push(newCharacter);
//   res.json(newCharacter);
// });
app.post('/api/notes', (req, res) => {
  console.log(req.body);
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid()
  };
    console.log(newNote);
    Note.push(newNote);

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(Note), function (err) {
      if (err) throw err;
    });
    res.json(Note)
  });

  //   const newNote =  req.body
  //   console.log(newNote);
  //   Note.push(newNote);
  //   res.json(newNote);

  //   const notes = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
  //   fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notes))
  //   // fs.writeFile('./Develop/db/db.json', data ;   
  //   res.json(notes);
  // });

  // app.post('/api/clear', (req, res) => {
  //   // Empty out the arrays of data
  //   tableData.length = 0;
  //   waitListData.length = 0;

  //   res.json({ ok: true });
  // });
  // //Delete method route- don't have to do 
  // In order to delete a note: you'll need to read all notes from the `db.json` file, 
  // remove the note with the given `id` property, 
  // and then rewrite the notes to the `db.json` file.

  
  // app.deleteNote('/api/notes/:id', 
  // // function (req, res) {
  // //   const data = fs.readFileSync('./Develop/db/db.json')
  //   const deletenotes = JSON.parse(data)
  //   const deleteNote = {
    
  //   };
  //   res.json(deletenote)  })


// If no matching route is found default to home
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});