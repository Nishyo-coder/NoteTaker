// We are linking our routes to a series of "data" sources.
// newNote
// SaveNote in DB
// getNotes
// DeleteNotes (id)

const express = require('express');
const fs = require('fs') //fs to read and write to file and update
const PORT = process.env.PORT || 3000
const app = express();

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

// //going to need this route to save in the db.json
  app.get('/api/notes', (req, res) => res.json(//db.json));

  app.post('/api/notes', (req, res) => {
    const NewNote =  {
      title: req.body.title,
      text: req.body.text,
      id: req.body.id,
      res.json(NewNote);
});


//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post('/api/clear', (req, res) => {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });

