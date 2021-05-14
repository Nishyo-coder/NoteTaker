const express = require('express');

// post route to create a note
//don't touch front end code (html or js)

//fs to read and write to file and update

//create a fetch route to get, create, delete note
//will need app.get, app.post, app.delete
//will need a bare minimum of 4 api routes
//create a note with a unique identifier- //uuid- look up

//will need to make this easier
app.use(express.static('public'));

const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});