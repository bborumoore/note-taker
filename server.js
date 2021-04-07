// Dependencies
const express = require('express');
const fs = require('fs');

// Create an instance of express server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router for all of the different paths


// return the notes.html file
app.get('./notes', (req, res) => res.json());
// read the db.json file
app.get('./api/notes', (req, res) => res.json());
// add a new note to the db.json file
app.post('/api/notes', (req, res) => res.json());
// delete an existing note based on id from the db.json file
app.delete('/api/notes/:id', (req, res) => res.json());
// return the index.html file
app.get('*', (req, res) => res.json());


// Listener to start server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  