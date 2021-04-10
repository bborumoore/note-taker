// Dependencies
const express = require('express');

// Create an instance of express server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Middelware to allow the pages access to the styling/javascript
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing for the HTML and API requests
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listener to start server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  