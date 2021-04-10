// DEPENDENCIES
// We need to include the fs package to read/write using these functions
const fs = require('fs');
const util = require('util');

// ROUTING

module.exports = (app) => {
  // These are to handle the different potential user api requests
  // Get request to pull all notes in the file
  app.get("/api/notes", function(req, res){
    fs.readFile("./db/db.json", "utf-8", function(err, data){
        if(err){
            throw err;
        }
       const notes = JSON.parse(data);
       console.log(notes);
       return res.json(notes);
    });
})

  // Post request to create new note
  app.post("/api/notes",function(req, res){
    const note = req.body;
    fs.readFile("./db/db.json", "utf-8", function(err, data){
        if(err){
            throw err;
        }
       let notes = JSON.parse(data);
       notes.push(note);
       notes = JSON.stringify(notes);
    fs.writeFile("./db/db.json", notes, function(err){
        if(err){
            throw err;
        }
    })
    });
    return res.json(note);
})

  // Delete request to remove a unique note
  app.delete('/api/notes', (req, res) => {
    
  });

};

