// DEPENDENCIES
// We need to include the fs package to read/write using these functions
const fs = require('fs');
const util = require('util');

// ROUTING

module.exports = (app) => {
  // These are to handle the different potential user api requests
  // Get request to pull all notes in the file
  app.get('/api/notes', (req, res) => {
    console.log(res)
    res.json(fs.readFile('../db/db.json', 'utf8' , (err, data) => {
      console.log(data)
    }))
  });

  // Post request to create new note
  app.post('/api/notes', (req, res) => {
    
  });

  // Delete request to remove a unique note
  app.delete('/api/notes', (req, res) => {
    
  });

};

