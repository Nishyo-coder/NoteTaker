// We are linking our routes to a series of "data" sources.
// newNote
// SaveNote in DB
// getNotes
// DeleteNotes (id)

const express = require('express');
const fs = require('fs') //fs to read and write to file and update
const PORT = process.env.PORT || 3000
const app = express();

const Note = [
  {
    noteName: 'input',
    title: 'input',
    text: 'Jedi Master',
    id: 900,
  },

module.exports = (app) => {


// //going to need this route to save in the db.json
  app.get('/api/notes', (req, res) => res.json(//db.json));

  app.post('/api/notes', (req, res) => {
    const newNote =  req.body
    newNote.noteName = newNote.noteName = newNote.name.replace(/\s+/g, '').toLowerCase();
    console.log(newNote);
  
    Note.push(newNote);
    res.json(newNote);
  });


//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post('/api/clear', (req, res) => {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });

