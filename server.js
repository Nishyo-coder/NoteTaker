//create a fetch route to get, create, delete note, save
//will need a bare minimum of 4 api routes
//create a note with a unique identifier- //uuid- look up
//will need app.get, app.post, app.delete

// Dependencies
const { json } = require('express');
const express = require('express');
const fs = require('fs') //fs to read and write to file and update
const PORT = process.env.PORT || 3000
const app = express();
const path = require('path')

//will need to make this easier
app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Note = require('./Develop/db/db.json')

// Basic route that sends the user first to the index Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// Basic route that sends the user first to the notes Page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// If no matching route is found default to home
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    return json
  });

app.get('/notes', (req, res) => {
    return res.json(Note);
  });

//   * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
// req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware

app.post('/api/notes', (req, res) => {
    const notes = json.parse(fs.readFile('./Develop/db/db.json'));
    const newNote =  req.body
    newNote.noteName = newNote.noteName = newNote.title.replace(/\s+/g, '').toLowerCase();
    console.log(newNote);

    Note.push(newNote);
    res.json(newNote);
    fs.writeFile('./Develop/db/db.json')
    res.json(notes);
    
  });


//   //Delete method route
//   app.delete('/', function (req, res) {
//     res.send('DELETE request to homepage')
//   })




// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});