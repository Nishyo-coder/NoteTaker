const express = require('express');
const fs = require('fs');
 
const app = express();
const PORT = 3000

app.use(express.static('public'))
app.use('/js', express.static(_dirname + 'public/js'))



//Routes / * `GET /notes` should return the `notes.html` file.
app.get('', (req, res) => {
  res.send('Take notes with New');
});

app.get('', (req, res) => {
  res.sendFile(_dirname + '/assets/index.html')

});

// * `GET *` should return the `index.html` file.

// // 
// if (window.location.pathname === '/notes') {
//   noteTitle = document.querySelector('.note-title');
//   noteText = document.querySelector('.note-textarea');
//   saveNoteBtn = document.querySelector('.save-note');
//   newNoteBtn = document.querySelector('.new-note');
//   noteList = document.querySelectorAll('.list-container .list-group');
// }



// // Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));