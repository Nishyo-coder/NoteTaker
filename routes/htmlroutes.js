// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

//Routes / * `GET /notes` should return the `notes.html` file.
app.get('/', (req, res) => res.send(path.join(__dirname, 'index.html')));


const { notEqual } = require('assert');
const path = require('path');

// ROUTING

module.exports = (app) => {
  // => HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content

  app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/notes.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });
};

